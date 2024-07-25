import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService, User } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks(@Query() query: number): any[] {
        console.log(query)
        return this.tasksService.getTasks();
    }

    @Get('/:id')
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
}
