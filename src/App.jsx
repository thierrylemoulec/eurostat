import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import Players from "./components/Players";

const client = new ApolloClient({
  uri: "https://kf9p4bkih6.execute-api.eu-west-1.amazonaws.com/dev/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="mx-auto max-w-screen-md p-4">
        <h1 className="font-bold text-gray-800 text-3xl text-center">
          Head to Head
        </h1>
        <Players />
      </div>
    </ApolloProvider>
  );
}

export default App;
