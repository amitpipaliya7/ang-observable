import { Component } from '@angular/core';
import { ResolveEnd } from '@angular/router';
import { Observable, from,  of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'observable';

  data:any[] = []

  // Observable 
  myObserval = new Observable((obs)=>{

    // obs.next([1,2,3,4,5])
    //obs.next(1)
    //obs.next(2)
    //obs.next(3) 

    setTimeout(()=>{obs.next(1)}, 1000) 
    setTimeout(()=>{obs.next(2)}, 2000) 
    setTimeout(()=>{obs.next(3)}, 3000)
    // setTimeout(()=>{obs.error(new Error("something wrong"))}, 3000)
    setTimeout(()=>{obs.next(4)}, 4000)
    setTimeout(()=>{obs.next(5)}, 5000);
    setTimeout(()=>{obs.complete()}, 6000);

  })
  

  //of()  RxJS 
  // arr1 = [1,2 ,3 ,4 ,5]
  // arr2 = [12,22 ,33 ,43 ,35]
  // myObserval = of(this.arr1, this.arr2)


  //from() RxJS
  // // arr3 = [1,2 ,3 ,4 ,5]

  // myProm = new Promise((resolve,reject)=>{
  //   resolve([1,2,3,4,5])
  // })

  // myObserval =from(this.myProm)
  // // myObserval =  from(this.arr3)

  
  //RxJS map  
  myObservalForMap = from([2,4,7,8,13,31,10])

  transformObs = this.myObservalForMap.pipe(map((val)=>{
    return val*2
  }))

  //RxJS filter 
  myObservalForFilter = this.transformObs.pipe(filter((val)=>{
    return val % 4 === 0;
  }))
  
  //MAP AND FILTER
  myObservalForMapAndFilter = from([2,4,7,8,13,31,10]).pipe(map((val)=>{
    return val*2;
  }),filter((val)=>{
    return val % 4 === 0;
  }))

  getDataBtn(){

    //Observer
    //next, error, complete

    // this.myObserval.subscribe((val : any)=>{
    //   // this.data = val;
    //   this.data.push(val)
    // },
    // (err)=>{
    //   alert(err.message)
    // },
    // ()=>{
    //   alert("Complete")
    // }
    // )


    //second method 
    this.myObserval.subscribe({
      next:(val:any)=>{
        this.data.push(val)
        console.log(this.data);
      },
      error(err){
        alert(err.message)
      },
      complete(){
      alert("Complete")                
      }
    })

  } 


 //RxJS map  
 dataM:any[] = []
  getDataBtnMap(){
       //RxJS map  
        this.transformObs.subscribe((val : any)=>{
      // this.data = val;
      this.dataM.push(val)
    },
    (err)=>{
      alert(err.message)
    },
    ()=>{
      // alert("Complete") 
    }
    )
  }

   //RxJS Filter 
 dataF:any[] = []
 getDataBtnFilter(){
       this.myObservalForFilter.subscribe((val : any)=>{
     // this.data = val;  
     this.dataF.push(val)
   },
   (err)=>{
     alert(err.message)
   },
   ()=>{
     // alert("Complete") 
   }
   )
 }

   //RxJS Map and Filter 
 dataMF:any[] = []
 getDataBtnMapAndFilter(){
       this.myObservalForMapAndFilter.subscribe((val : any)=>{
     // this.data = val;  
     this.dataMF.push(val)
   },
   (err)=>{
     alert(err.message)
   },
   ()=>{
     // alert("Complete") 
   }
   )
 }

}
