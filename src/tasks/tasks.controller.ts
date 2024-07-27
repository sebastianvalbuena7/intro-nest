import { Body, Controller, Delete, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService, User } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks(@Query() query: number): any[] {
        console.log(query)
        return this.tasksService.getTasks();
    }

    @Get('/id/:id')
    getTask(@Param('id') id: string) {
        console.log(id)
        return this.tasksService.getTask(parseInt(id));
    }

    @Post()
    //!: Validaciones de DTO
    // @UsePipes(new ValidationPipe())
    createTask(@Body() task: CreateTaskDto): CreateTaskDto {
        return this.tasksService.createTask(task);
    }

    @Put()
    updateTask(@Body() task: UpdateTaskDto): UpdateTaskDto {
        return this.tasksService.updateTask(task);
    }

    @Delete()
    deleteTask(): string {
        return this.tasksService.deleteTask();
    }

    @Patch()
    updateTaskStatus(): string {
        return this.tasksService.patchTask();
    }

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number): number {
        return num + 14;
    }

    @Get('validBool/:bool')
    getBoolean(@Param('bool', ParseBoolPipe) bool: boolean): boolean {
        return bool;
    }

    @Get('notfound')
    @HttpCode(404)
    notFoundPage() {
        return '404 not found';
    }

    @Get('serverError')
    @HttpCode(500)
    errorPage() {
        return '404 not found'; 2

    }
}