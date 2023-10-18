import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
<<<<<<< HEAD
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes( new ValidationPipe())
  await app.listen(3000);
=======
	const app = await NestFactory.create(AppModule);
	const config = new DocumentBuilder()
		.setTitle('Unbiased backend')
		.setDescription('The unbiased backend API description')
		.setVersion('0.1')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);
	await app.listen(3000);
>>>>>>> 63b68471373bef89ce04c3a01c71349d48b6e277
}
bootstrap();
