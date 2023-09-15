import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql", // Adres URL twojego serwera GraphQL
    cache: new InMemoryCache(),
});

export default client;
