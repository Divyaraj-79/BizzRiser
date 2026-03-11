import { Module } from '@nestjs/common';
import { PartnerInfoController } from './partner-info.controller';
import { PartnerInfoService } from './partner-info.service';

@Module({
    controllers: [PartnerInfoController],
    providers: [PartnerInfoService],
})
export class PartnerInfoModule { }
