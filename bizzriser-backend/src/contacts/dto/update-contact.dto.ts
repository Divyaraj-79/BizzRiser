import { PartialType } from '@nestjs/mapped-types';
import { CreateContactDto } from './create-contact.dto';

export class UpdateContactDto extends PartialType(CreateContactDto) {
    status?: string; // e.g. NEW, IN_PROGRESS, RESOLVED
}
