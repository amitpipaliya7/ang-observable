import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.scss']
})
export class UnsubscribeComponent {

  data: number[] = []

  counter = interval(1000)

  subscribe 

  subscribeBtn(){
    this.subscribe =  this.counter.subscribe((val)=>{
      this.data.push(val)
    })
  }

  unsubscribeBtn(){
    this.subscribe.unsubscribe()
  }
}
