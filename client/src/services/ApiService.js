/**
 * Centralizes HTTP communication with the backend.
 * - Build API URLs.
 * - Send cookies with every request.
 * - Serialize request bodies as JSON.
 * - Parse JSON responses.
 * - Convert failed responses into JavaScript errors.
 * - Expose GET, POST, PUT, PATCH, and DELETE helpers.
 */
export class ApiService { //Small wrapper around the browser Fetch API.
/**
 * @param {string} baseUrl - Shared prefix for all API endpoints.
 */
  constructor(baseUrl = "/api") {
    this.baseUrl = baseUrl;
  }

  async request(endpoint, options = {}) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          ...options.headers
        },
        ...options
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "The request failed.");
      }

      return data;
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error("The server could not be reached.");
      }

      throw error;
    }
  }

  get(endpoint) {
    return this.request(endpoint);
  }

  post(endpoint, body = {}) {
    return this.request(endpoint, {
      method: "POST",
      body: JSON.stringify(body)
    });
  }

  put(endpoint, body = {}) {
    return this.request(endpoint, {
      method: "PUT",
      body: JSON.stringify(body)
    });
  }

  patch(endpoint, body = {}) {
    return this.request(endpoint, {
      method: "PATCH",
      body: JSON.stringify(body)
    });
  }

  delete(endpoint) {
    return this.request(endpoint, {
      method: "DELETE"
    });
  }
}
