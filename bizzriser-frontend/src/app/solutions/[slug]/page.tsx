import { API_URL } from "@/lib/api";
import IndustrySolutionPage from "./SolutionContent";

export async function generateStaticParams() {
    const fallbacks = [
        { slug: "retail" },
        { slug: "realestate" },
        { slug: "edtech" },
        { slug: "health" },
    ];

    try {
        const response = await fetch(`${API_URL}/solution-industries`);
        if (!response.ok) return fallbacks;
        const industries = await response.json();
        const apiPaths = industries.map((ind: any) => ({
            slug: ind.slug,
        }));
        
        // Combine with fallbacks and remove duplicates
        const allPaths = [...fallbacks];
        apiPaths.forEach((p: any) => {
            if (!allPaths.some(fp => fp.slug === p.slug)) {
                allPaths.push(p);
            }
        });
        return allPaths;
    } catch (error) {
        console.error("Error generating static params for solutions:", error);
        return fallbacks;
    }
}

export default function Page() {
    return <IndustrySolutionPage />;
}
