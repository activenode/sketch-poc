import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DocumentViwer from "./DocumentViewer";

const client = new ApolloClient({
  uri: "https://graphql.sketch.cloud/api",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="*" element="404"></Route>

          <Route path="/" element={<DocumentViwer />} />
          <Route path="/a/:artboardId" element={<DocumentViwer />} />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
