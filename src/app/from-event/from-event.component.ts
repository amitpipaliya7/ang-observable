import { AfterViewInit } from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements AfterViewInit{

  @ViewChild('addBtn') addBtn : ElementRef;

  count = 1;  
  clickBtn(){
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((data)=>{
      console.log(data);
      this.showItem(this.count++)
    })
  }

  ngAfterViewInit(): void {
    this.clickBtn()
  }

  showItem(val){
    let div = document.createElement('div')
    div.innerText = 'item' + val
    document.getElementById('divID').appendChild(div)
  }

}
