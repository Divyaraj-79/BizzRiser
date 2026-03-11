import { Module } from '@nestjs/common';
import { PartnerInfoController } from './partner-info.controller';
import { PartnerInfoService } from './partner-info.service';

import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [PartnerInfoController],
    providers: [PartnerInfoService],
})
export class PartnerInfoModule { }
