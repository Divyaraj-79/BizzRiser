import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for Next.js frontend
  const frontendUrl = process.env.FRONTEND_URL;
  const defaultOrigins = ['http://localhost:3000', 'https://bizzriser.com', 'https://www.bizzriser.com'];
  const envOrigins = frontendUrl ? frontendUrl.split(',').map(url => url.trim()) : [];
  const allowedOrigins = Array.from(new Set([...defaultOrigins, ...envOrigins]));

  app.enableCors({
    origin: allowedOrigins,
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Accept,Authorization',
  });

  // Global exception filter for better logging
  const { AllExceptionsFilter } = require('./common/filters/http-exception.filter');
  app.useGlobalFilters(new AllExceptionsFilter());

  const config = new DocumentBuilder()
    .setTitle('BizzRiser API')
    .setDescription('The backend API for the BizzRiser SaaS Platform')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT || 3001;
  await app.listen(port, '0.0.0.0');
  console.log(`Application is running on: http://0.0.0.0:${port}`);
  console.log(`Swagger UI is available at: http://0.0.0.0:${port}/api/docs`);
}
bootstrap();
