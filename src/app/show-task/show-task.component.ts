import { Component, OnInit, inject } from '@angular/core';
import { TaskServiceService } from '../service/task-service.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.scss']
})
export class ShowTaskComponent implements OnInit{
  
  taskServ = inject(TaskServiceService)
  
  showTask = ["Task 1","Task 2","Task 3","Task 4"]
  
  ngOnInit(): void {
    this.taskServ.createTask.subscribe((val)=>{
      this.showTask.push(val)
    })
  }

}
