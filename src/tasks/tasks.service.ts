import { HttpCode, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface User {
    name: string;
    age: number;
}

@Injectable()
export class TasksService {
    private tasks = [];

    getTasks(): any[] {
        return this.tasks;
    }

    getTask(id: number): any {
        const taskFound = this.tasks.find(task => task.id === id);

        if (!taskFound)
            return new NotFoundException(`La tarea con id ${id} no fue encontrada`);

        return taskFound;
    }

    createTask(task: CreateTaskDto): CreateTaskDto {
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        });
        return task;
    }

    updateTask(task: UpdateTaskDto): UpdateTaskDto {
        console.log(task);
        return task;
    }

    deleteTask(): string {
        return 'Eliminando tarea';
    }

    patchTask(): string {
        return 'Actualizando el estado de una tarea';
    }
}
