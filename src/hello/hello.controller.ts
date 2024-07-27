import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ValidateUserPipe } from 'src/tasks/pipes/validate-user/validate-user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('hello')
export class HelloController {

    @Get('greet')
    // ! Ejemplo con objeto
    // greet?name=sebas&age=10
    @UseGuards(AuthGuard)
    greet(@Query(ValidateUserPipe) query: { name: string, age: number }) {
        return `Hello ${query.name}, you are ${query.age}`;
    }
}
