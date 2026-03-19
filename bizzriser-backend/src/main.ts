import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  console.log('🟢 Bootstrap started...');
  process.on('unhandledRejection', (reason, promise) => {
    console.error('🔥 Unhandled Rejection at:', promise, 'reason:', reason);
  });
  process.on('uncaughtException', (err) => {
    console.error('🔥 Uncaught Exception:', err);
  });

  const app = await NestFactory.create(AppModule);
  console.log('🟢 Nest app created');

  // Basic request logger for troubleshooting
  app.use((req: any, res: any, next: any) => {
    console.log(`[Request] ${new Date().toISOString()} ${req.method} ${req.url}`);
    next();
  });

  // Enable CORS for all origins during deployment troubleshooting
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type,Accept,Authorization,X-Requested-With',
  });

  // Global exception filter for better logging
  app.useGlobalFilters(new AllExceptionsFilter());

  const config = new DocumentBuilder()
    .setTitle('BizzRiser API')
    .setDescription('The backend API for the BizzRiser SaaS Platform')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT || 3000;
  
  // Hostinger/Proxy Socket Awareness
  if (typeof port === 'string' && (port.startsWith('/') || port.startsWith('\\\\'))) {
    await app.listen(port);
    console.log(`Application is running on socket: ${port}`);
  } else {
    await app.listen(port, '0.0.0.0');
    console.log(`Application is running on: http://0.0.0.0:${port}`);
  }
  console.log(`Swagger UI is available at: http://0.0.0.0:${port}/api/docs`);
}
bootstrap();
