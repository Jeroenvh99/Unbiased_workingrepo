import { Module } from '@nestjs/common';
import { ApplyModule } from './apply/apply.module';
import { CreatesModule } from './creates/creates.module'

@Module({
  imports: [ApplyModule, CreatesModule],
})

export class AppModule {}
