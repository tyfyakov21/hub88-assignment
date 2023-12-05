import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { GET_COUNTRIES } from "../queries";

export const BASE_URL = `https://countries.trevorblades.com/`;

export const useCountries = (filter?: string) => {
  return useQuery({
    queryKey: ["countries", filter],
    queryFn: async () =>
      request(BASE_URL, GET_COUNTRIES(), {
        filter: filter?.toUpperCase() ?? "",
      }),
    retry: 3,
  });
};
