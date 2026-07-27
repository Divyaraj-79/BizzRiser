import { caseStudies } from "@/lib/static-data";
import CaseStudyDetailPage from "./CaseStudyContent";

export function generateStaticParams() {
    if (caseStudies.length === 0) return [{ id: "example-study" }];
    return caseStudies.map((study: any) => ({
        id: study.slug || study.id,
    }));
}

export default function Page() {
    return <CaseStudyDetailPage />;
}
