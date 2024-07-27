import { Module } from "@nestjs/common";
// import { TasksController } from './tasks.controller';
// import { TasksService } from './tasks.service';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

@Module({
    // providers: [TasksService]
    controllers: [HelloController],
    providers: [HelloService]
})
export class HelloModule {

}