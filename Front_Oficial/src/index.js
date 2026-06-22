import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { getGraphqlApiUrl } from './services/apiConfig';

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';
import { ApolloProvider } from '@apollo/client/react';

const client = new ApolloClient({
  link: new HttpLink({ uri: getGraphqlApiUrl() }), // Llama a la función aquí
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
