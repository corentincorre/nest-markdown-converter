import { CommandFactory } from 'nest-commander';
import { NestFactory } from '@nestjs/core';
import { CliModule } from './cli/cli.module';
import { AppModule } from './app.module';

async function bootstrap() {
  await CommandFactory.run(CliModule);
  const app = await NestFactory.create(AppModule);
  await app.listen(8000);
}
bootstrap();
