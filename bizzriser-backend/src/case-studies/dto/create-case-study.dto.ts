export class CreateCaseStudyDto {
    company!: string;
    industry!: string;
    goal!: string;
    metric!: string;
    metricLabel!: string;
    title!: string;
    excerpt!: string;
    content!: string;
    logoUrl?: string;
    published?: boolean;
}
