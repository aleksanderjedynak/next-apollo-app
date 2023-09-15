import { ApolloServer } from 'apollo-server-micro';
import typeDefs from '../../graphQL/typeDefs';
import resolvers from '../../graphQL/resolvers';
import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
    methods: ['POST', 'OPTIONS'],
    origin: '*', // Adjust this if you want to be more specific
    credentials: true
});

// Helper to run middleware
const runMiddleware = (req, res, fn) => {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
    api: {
        bodyParser: false,
    },
};

let isServerStarted = false;

export default async function handler(req, res) {
    // Run the cors middleware
    await runMiddleware(req, res, cors);

    if (!isServerStarted) {
        await apolloServer.start();
        isServerStarted = true;
    }

    return apolloServer.createHandler({ path: '/api/graphql' })(req, res);
};
