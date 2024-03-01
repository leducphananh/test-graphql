const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// Load schemas & resolvers
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');

async function startApolloServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await server.start();

    const app = express();
    server.applyMiddleware({ app });

    app.listen({ port: 4000 }, () => {
        console.log(
            `Server ready at http://localhost:4000${server.graphqlPath}`
        );
    });
}

startApolloServer().catch((error) => {
    console.error('Error starting server:', error);
});
