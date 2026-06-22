const LOCAL_GRAPHQL_API_URL = 'http://localhost:3001/graphql';

export function getGraphqlApiUrl() {
  // Fuerza a leer la variable. Si no existe, usa la URL pública por defecto.
  const configuredUrl = process.env.REACT_APP_GRAPHQL_API_URL || 'https://anton-server.tailb29b29.ts.net/graphql';
  
  console.log("URL de GraphQL configurada:", configuredUrl); // Esto nos dirá en la consola si la leyó
  return configuredUrl;
}

export function shouldUseMockGuion() {
  return process.env.REACT_APP_USE_MOCK_GUION === 'true';
}
