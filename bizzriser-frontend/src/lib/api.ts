export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export async function fetchApi(endpoint: string, options: RequestInit = {}) {
    const url = `${API_URL}${endpoint}`;

    // Provide default headers but allow overrides
    const headers = new Headers(options.headers || {});
    if (!headers.has('Content-Type') && !(options.body instanceof FormData)) {
        headers.set('Content-Type', 'application/json');
    }

    const response = await fetch(url, {
        ...options,
        headers,
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'API request failed');
    }

    // Handle empty responses (like 204 No Content for Deletions)
    const text = await response.text();
    return text ? JSON.parse(text) : {};
}
