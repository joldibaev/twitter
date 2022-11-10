import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const Documentation = {
  init(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('twitter clone api')
      .setDescription('The API description')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  },
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  Documentation.init(app);

  await app.listen(3000);
}

void bootstrap();
