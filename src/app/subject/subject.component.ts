import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit{
  ngOnInit(): void {

    //Observable vs Subject

    //Observalabe
    let obs = new Observable((observer)=>{
      observer.next(Math.random())
    })

    console.log("Observalabe");
    
    //subscribe 1
    obs.subscribe((data)=>{console.log("subscribe 1: " + data);})
    //subscribe 2
    obs.subscribe((data)=>{console.log("subscribe 2: " + data);})


    console.log("Subject")
    //Subject
    const sub =  new Subject()
    //subscribe 1
    sub.subscribe((data)=>{console.log("subscribe 1: " +data)})
    //subscribe 2
    sub.subscribe((data)=>{console.log("subscribe 2: " +data)})

    sub.next(Math.random())


    console.log("BehaviorSubject");
    //BehaviorSubject
    const behaviorsubject = new BehaviorSubject<number>(100)
     //subscribe 1
     behaviorsubject.subscribe((data)=>{console.log("subscribe 1: " +data)})
     //subscribe 2
     behaviorsubject.subscribe((data)=>{console.log("subscribe 2: " +data)})

     behaviorsubject.next(2020)

     //subscribe 3
     behaviorsubject.subscribe((data)=>{console.log("subscribe 3: " +data)})

     behaviorsubject.next(2023)


    console.log("ReplaySubject");
     //ReplaySubject
     const reSub = new ReplaySubject(2)

      reSub.next(100)
      reSub.next(200)
      reSub.next(300)

      //subscribe 1
      reSub.subscribe((data)=>{console.log("subscribe 1: " +data)})
      //subscribe 2
      reSub.subscribe((data)=>{console.log("subscribe 2: " +data)})
 
      reSub.next(2020)
 

      
      //subscribe 3
      reSub.subscribe((data)=>{console.log("subscribe 3: " +data)})
 
      reSub.next(2023)



      console.log("AsyncSubject");
      //ReplaySubject
      const AsyncSub = new AsyncSubject()

      AsyncSub.next(100)
      AsyncSub.next(200)
      AsyncSub.next(300)
      AsyncSub.complete()

      AsyncSub.subscribe((data)=>{ console.log("Subscribe 1: " + data) })

      AsyncSub.next(400)
      AsyncSub.complete()

      AsyncSub.subscribe((data)=>{ console.log("Subscribe 2: " + data) })




      //Observable vs promis 
      
      const prom =  new Promise((resolve, reject)=>{
          console.log("Promise called");
          resolve(100)
          resolve(200)
          resolve(300) //emit only one value

      })
      prom.then((data)=>{console.log("prom "+ data);
      })

      const obser = new Observable((ob)=>{
        console.log("Observable called");
        ob.next(100)
        ob.next(200)
        ob.next(300) //emit multiple value
      })
      obser.subscribe((data)=>{console.log("obser " + data);
      })

  }


}
