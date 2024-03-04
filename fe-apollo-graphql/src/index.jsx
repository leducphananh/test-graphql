import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { GRAPHQL_ENDPOINT } from '../src/utils/constants';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Theme appearance="light" accentColor="violet">
                <App />
            </Theme>
        </ApolloProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
