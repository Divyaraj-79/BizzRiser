export class CreateLeadDto {
    source!: string;
    name!: string;
    phone?: string;
    email?: string;
    metadata?: Record<string, any>; // JSON metadata
}
