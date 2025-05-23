import React from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./styles";
import Pages from "./pages";
import {
  ApolloClient,
  ApolloCache,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
const root = createRoot(document.getElementById("root")!);

const client = new ApolloClient({
  uri: "https://odyssey-lift-off-server.herokuapp.com/",
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>
  </React.StrictMode>
);
