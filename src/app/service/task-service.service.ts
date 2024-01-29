import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }

  //show data by emit
  // createTask :  EventEmitter<string> =new EventEmitter<string>()
  // onClickCreateTask(user){
  //   this.createTask.emit(user)
  // }


  //show data by subject
  createTask :  Subject<string> =new Subject<string>()
  onClickCreateTask(user){
    this.createTask.next(user)
  }
}
