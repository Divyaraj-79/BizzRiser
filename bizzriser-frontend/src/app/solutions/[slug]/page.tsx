import { solutionIndustries } from "@/lib/static-data";
import IndustrySolutionPage from "./SolutionContent";

export function generateStaticParams() {
    if (solutionIndustries.length === 0) return [{ slug: "example-solution" }];
    return solutionIndustries.map((ind: any) => ({
        slug: ind.slug,
    }));
}

export default function Page() {
    return <IndustrySolutionPage />;
}
