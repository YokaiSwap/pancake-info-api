import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: "https://www.yokaiswap.com/subgraphs/name/yokaiswap/exchange",
  }),
  cache: new InMemoryCache(),
});
