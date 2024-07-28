import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth.middleware';
import { PrismaService } from 'src/prisma.service';

@Module({
    controllers: [UsersController],
    providers: [UsersService, PrismaService]
})
export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            // .forRoutes('users');
            .forRoutes(
                {
                    path: 'users',
                    method: RequestMethod.ALL
                }
            )
            .apply(AuthMiddleware)
            .forRoutes(
                {
                    path: 'users',
                    method: RequestMethod.POST
                }
            )
    }
}
