const LOCAL_GRAPHQL_API_URL = 'http://localhost:3001/graphql';

export function getGraphqlApiUrl() {
  const configuredUrl = process.env.REACT_APP_GRAPHQL_API_URL?.trim();

  if (process.env.NODE_ENV === 'development') {
    const useRemoteApi = process.env.REACT_APP_USE_REMOTE_API === 'true';
    return useRemoteApi && configuredUrl ? configuredUrl : LOCAL_GRAPHQL_API_URL;
  }

  if (configuredUrl) {
    return configuredUrl;
  }

  return '/graphql';
}

export function shouldUseMockGuion() {
  return process.env.REACT_APP_USE_MOCK_GUION === 'true';
}
