export const ADMIN_API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export async function adminFetch(endpoint: string, options: RequestInit = {}) {
    const token = typeof window !== "undefined" ? localStorage.getItem("admin_token") : null;

    const headers = {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
    };

    const response = await fetch(`${ADMIN_API_BASE}${endpoint}`, {
        ...options,
        headers,
    });

    if (response.status === 401) {
        if (typeof window !== "undefined") {
            localStorage.removeItem("admin_token");
            window.location.href = "/admin/login";
        }
    }

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
        throw new Error(data.message || `API Error: ${response.status}`);
    }

    return data;
}
