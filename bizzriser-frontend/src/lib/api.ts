import * as staticData from './static-data';

export const API_URL = (process.env.NEXT_PUBLIC_API_URL || 'https://api.bizzriser.com').replace(/\/$/, '');

export async function fetchApi(endpoint: string, options: RequestInit = {}) {
    const method = options.method?.toUpperCase() || 'GET';
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;

    // ────────────────────────────────────────────────────────
    // STATIC DATA INTERCEPTOR for GET requests
    // ────────────────────────────────────────────────────────
    if (method === 'GET') {
        const urlParamsFree = cleanEndpoint.split('?')[0];

        // Specific endpoint matching:
        if (urlParamsFree === '/blogs/featured') return staticData.featuredBlogs;
        if (urlParamsFree === '/blogs') return staticData.blogs;
        if (urlParamsFree.startsWith('/blogs/')) {
            const slug = urlParamsFree.split('/').pop();
            const found = staticData.blogs.find((b: any) => b.slug === slug || b.id === slug);
            if (found) return found;
        }

        if (urlParamsFree === '/case-studies') return staticData.caseStudies;
        if (urlParamsFree.startsWith('/case-studies/')) {
            const id = urlParamsFree.split('/').pop();
            const found = staticData.caseStudies.find((c: any) => c.id === id || c.slug === id);
            if (found) return found;
        }

        if (urlParamsFree === '/solution-industries') return staticData.solutionIndustries;
        if (urlParamsFree.startsWith('/solution-industries/slug/')) {
            const slug = urlParamsFree.split('/').pop();
            const found = staticData.solutionIndustries.find((s: any) => s.slug === slug || s.id === slug);
            if (found) return found;
        }

        if (urlParamsFree.startsWith('/testimonials')) return staticData.testimonials; // handles /testimonials/published too
        if (urlParamsFree === '/home-stats') return staticData.homeStats;
        if (urlParamsFree === '/pricing-plans') return staticData.pricingPlans;
        if (urlParamsFree === '/brands') return staticData.brands;
        if (urlParamsFree === '/industry-chatbots') return staticData.industryChatbots;
        
        // About/Partner Info isn't fully in db sometimes or static data? 
        // We can just return empty arrays or objects to prevent crashes for unmapped endpoints.
        if (urlParamsFree.startsWith('/partner-info')) return {};
    }

    // ────────────────────────────────────────────────────────
    // FALLBACK TO REAL API (e.g., for POST to /contacts or /newsletters)
    // ────────────────────────────────────────────────────────
    const url = `${API_URL}${cleanEndpoint}`;
    const headers = new Headers(options.headers || {});
    
    if (!headers.has('Content-Type') && !(options.body instanceof FormData)) {
        headers.set('Content-Type', 'application/json');
    }

    const response = await fetch(url, {
        ...options,
        headers,
    });

    if (!response.ok) {
        let errorData = {};
        try {
            errorData = await response.json();
        } catch { }
        throw new Error((errorData as any).message || 'API request failed');
    }

    const text = await response.text();
    return text ? JSON.parse(text) : {};
}
