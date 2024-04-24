import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';

import { HttpLoggerMiddleware } from './common/middlewares';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production').default('development'),
        PORT: Joi.number().port().default(3000),
        DATABASE_URL: Joi.string().required(),
        ADMIN_NAME: Joi.string().required(),
        ADMIN_PASSWORD: Joi.string().required(),
      }),
      validationOptions: { abortEarly: true },
    }),
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpLoggerMiddleware).forRoutes('*');
  }
}
