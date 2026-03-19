import { API_URL } from "@/lib/api";
import CaseStudyDetailPage from "./CaseStudyContent";

export async function generateStaticParams() {
    const fallbacks = [
        { id: "real-estate-success" },
        { id: "ecommerce-growth" },
        { id: "healthcare-efficiency" },
    ];

    try {
        const response = await fetch(`${API_URL}/case-studies`);
        if (!response.ok) return fallbacks;
        const studies = await response.json();
        const apiPaths = studies.map((study: any) => ({
            id: study.slug || study.id,
        }));

        const allPaths = [...fallbacks];
        apiPaths.forEach((p: any) => {
            if (!allPaths.some(fp => fp.id === p.id)) {
                allPaths.push(p);
            }
        });
        return allPaths;
    } catch (error) {
        console.error("Error generating static params for case studies:", error);
        return fallbacks;
    }
}

export default function Page() {
    return <CaseStudyDetailPage />;
}
