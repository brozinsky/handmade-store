import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const HASURA_SECRET = process.env.REACT_APP_API_KEY
const URL = process.env.REACT_APP_API_URL

const createApolloClient = (authToken) => {
    return new ApolloClient({
        link: new HttpLink({
            uri: URL,
            headers: {
                'x-hasura-admin-secret': HASURA_SECRET
            }
        }),
        cache: new InMemoryCache(),
    });
};

const client = createApolloClient(HASURA_SECRET);

export default client