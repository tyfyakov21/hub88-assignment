import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      "https://countries.trevorblades.com/": {},
    },
  ],
  ignoreNoDocuments: true,
  generates: {
    "./src/gql/": {
      documents: ["src/**/*.tsx"],
      preset: "client",
      presetConfig: {
        gqlTagName: "graphql",
      },
    },
  },
};

export default config;
