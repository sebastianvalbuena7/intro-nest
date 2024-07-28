import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { Service } from './.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { HelloModule } from './hello/hello.module';
import { PaymentsModule } from './payments/payments.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule, HelloModule, PaymentsModule],
  providers: [UsersService, Service, PrismaService],
  controllers: [UsersController]
})
export class AppModule {}
