import { API_URL } from "@/lib/api";
import CaseStudyEditorPage from "./CaseStudyEditContent";

export async function generateStaticParams() {
    try {
        const response = await fetch(`${API_URL}/case-studies`);
        const studies = await response.json();
        const paths = studies.map((study: any) => ({
            id: study.id,
        }));
        // Always include 'new' for creating new items
        paths.push({ id: "new" });
        return paths;
    } catch (error) {
        console.error("Error generating static params for admin case studies:", error);
        return [{ id: "new" }];
    }
}

export default function Page() {
    return <CaseStudyEditorPage />;
}
