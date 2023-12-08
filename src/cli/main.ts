import { NestFactory } from '@nestjs/core';
import { CliModule } from './cli.module';
import { CliService } from './cli.service';

async function bootstrap() {
    const appContext = await NestFactory.createApplicationContext(CliModule);
    appContext.get(CliService);
}
bootstrap();