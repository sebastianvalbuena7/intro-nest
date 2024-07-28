import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @ApiTags('users')
    @ApiOperation({summary: 'Get All Users'})
    @ApiResponse({status: 200, description: 'Get all Users'})
    @ApiResponse({status: 403, description: 'Forbidden'})
    @Get()
    getUsers(): Promise<User[]> {
        return this.usersService.getUsers();
    }

    @ApiTags('users')
    @Post()
    // ! Forma de usar pipes o en el main de la app
    // @UsePipes(new ValidationPipe())
    createUser(@Body() createUser: CreateUserDto) {
        return this.usersService.createUser(createUser);
    }
}
