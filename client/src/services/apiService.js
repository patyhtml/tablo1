// src/services/apiService.js

export class ApiService {
    static url = 'http://localhost:3001';

    static async get(url) {
        try {
            const response = await fetch(`${ApiService.url}${url}`);
            return await this.handleResponse(response);
        } catch (error) {
            console.error('Error in GET request:', error);
            throw error; // Rzuć błąd dalej po zalogowaniu
        }
    }

    static async post(url, params = {}) {
        try {
            const response = await fetch(`${ApiService.url}${url}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            });
            return await this.handleResponse(response);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    static async put(url, params = {}) {
        try {
            const response = await fetch(`${ApiService.url}${url}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            });
            return await this.handleResponse(response);
        } catch (error) {
            console.error('Error in PUT request:', error);
            throw error;
        }
    }

    static async delete(url, params = {}) {
        try {
            const response = await fetch(`${ApiService.url}${url}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            });
            return await this.handleResponse(response);
        } catch (error) {
            console.error('Error in DELETE request:', error);
            throw error;
        }
    }

    static async handleResponse(response) {
        try {
            if (response.ok) {
                const contentType = response.headers.get('Content-Type');
                if (contentType && contentType.includes('application/json')) {
                    return await response.json();
                } else {
                    // Handle non-JSON responses if necessary
                    return response.text(); // Może być inny format niż JSON
                }
            } else {
                const errorData = await response.text();
                const error = errorData || response.statusText || 'Błąd serwera';
                return Promise.reject(new Error(error));
            }
        } catch (error) {
            console.error('Error in handleResponse:', error);
            throw error;
        }
    }
}
