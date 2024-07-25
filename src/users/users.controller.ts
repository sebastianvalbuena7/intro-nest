import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    getUsers(): any[] {
        return this.usersService.getUsers();
    }

    @Post()
    // ! Forma de usar pipes o en el main de la app
    // @UsePipes(new ValidationPipe())
    createUser(@Body() createUser: CreateUserDto) {
        return this.usersService.createUser(createUser);
    }
}
