import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    getUsers(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    createUser(user: CreateUserDto): Promise<User> {
        return this.prisma.user.create({
            data: user
        });
    }
}
