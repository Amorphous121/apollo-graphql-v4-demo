import { readFileSync } from "fs";
import { join } from "path";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { resolvers } from "./graphql/resolvers";
const typeDefs = readFileSync(
  join(__dirname, "graphql", "schema.graphql"),
  "utf-8"
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { path: "/graphql", port: 4000 },
}).then(({ url }) => {
  console.log(`Server is up and running at ${url}graphql`)
});

