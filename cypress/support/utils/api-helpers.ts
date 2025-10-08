/**
 * API helper functions
 */

export interface ApiRequestOptions {
  method?: string;
  url: string;
  body?: Record<string, unknown>;
  headers?: Record<string, string>;
  failOnStatusCode?: boolean;
  timeout?: number;
}

/**
 * Make an API request with common defaults
 */
export const apiRequest = (options: ApiRequestOptions) => {
  const defaults = {
    method: 'GET',
    failOnStatusCode: true,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return cy.request({
    ...defaults,
    ...options,
    headers: {
      ...defaults.headers,
      ...options.headers,
    },
  });
};

/**
 * Helper for GET requests
 */
export const get = (url: string, headers?: Record<string, string>) => {
  return apiRequest({ method: 'GET', url, headers });
};

/**
 * Helper for POST requests
 */
export const post = (
  url: string,
  body: Record<string, unknown>,
  headers?: Record<string, string>
) => {
  return apiRequest({ method: 'POST', url, body, headers });
};

/**
 * Helper for PUT requests
 */
export const put = (
  url: string,
  body: Record<string, unknown>,
  headers?: Record<string, string>
) => {
  return apiRequest({ method: 'PUT', url, body, headers });
};

/**
 * Helper for DELETE requests
 */
export const del = (url: string, headers?: Record<string, string>) => {
  return apiRequest({ method: 'DELETE', url, headers });
};

/**
 * Helper for PATCH requests
 */
export const patch = (
  url: string,
  body: Record<string, unknown>,
  headers?: Record<string, string>
) => {
  return apiRequest({ method: 'PATCH', url, body, headers });
};

/**
 * Validate API response
 */
export const validateResponse = (
  response: Cypress.Response<unknown>,
  expectedStatus: number,
  schema?: Record<string, string>
) => {
  expect(response.status).to.eq(expectedStatus);
  void expect(response.body).to.not.be.undefined;

  if (schema) {
    // Simple schema validation
    Object.keys(schema).forEach((key) => {
      expect(response.body).to.have.property(key);
    });
  }

  return response;
};
