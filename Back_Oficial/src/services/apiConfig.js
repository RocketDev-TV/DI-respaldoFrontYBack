const LOCAL_GRAPHQL_API_URL = 'http://localhost:3001/graphql';

export function getGraphqlApiUrl() {
  const configuredUrl = process.env.REACT_APP_GRAPHQL_API_URL?.trim();

  if (configuredUrl) {
    return configuredUrl;
  }

  if (process.env.NODE_ENV === 'development') {
    return LOCAL_GRAPHQL_API_URL;
  }

  return '/graphql';
}

export function shouldUseMockGuion() {
  return process.env.REACT_APP_USE_MOCK_GUION === 'true';
}
