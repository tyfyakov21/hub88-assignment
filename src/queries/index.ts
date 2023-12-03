import { graphql } from "../gql/gql";

export const GET_COUNTRIES = () => {
  return graphql(`
    query GetCountries($filter: String) {
      countries(filter: { code: { regex: $filter } }) {
        name
        code
      }
    }
  `);
};
