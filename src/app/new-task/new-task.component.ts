import { Component, inject } from '@angular/core';
import { TaskServiceService } from '../service/task-service.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {

  taskServ = inject(TaskServiceService)

  newTask:string = ""

  addTask(){
    this.taskServ.onClickCreateTask(this.newTask)
  }
}
