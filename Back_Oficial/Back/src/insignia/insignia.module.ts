import { Module } from '@nestjs/common';
import { InsigniaResolver } from './insignia.resolver';

@Module({
  providers: [InsigniaResolver],
})
export class InsigniaModule {}