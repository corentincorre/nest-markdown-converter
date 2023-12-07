import { Module } from '@nestjs/common';
import { CliCommand } from './cli.command';

@Module({
  providers: [CliCommand],
})
export class CliModule {}
