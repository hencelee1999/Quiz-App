import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionsService } from '../service/questions.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

   public questionList : any =[];
   public currentQuestion : number=0;
   public points : number = 0;
   counter =60;
   correctAnswer :number =0;
   inCorrectAnswer : number = 0;
   interval$ :any;
   progress:string="0";
   isQuizCompleted : boolean = false;
  


  constructor(private questionservice:QuestionsService) { }

  ngOnInit(): void {
    this.getAllQuestions();
    this.startCounter();
  //   this.questionservice.fetchAllQuestions()
  //     .subscribe((res: any) => {
  // this.questionList = res;
  // this.questionList.forEach((questionText: { [x: string]: string; })=>{
  //   questionText['correct']='';
  // })
  // console.log(res);
  // console.log("Working")
  // });
    
  }
  getAllQuestions(){
    this.questionservice.fetchAllQuestions()
    .subscribe(res=>{
      this.questionList = res;
      console.log(res);

     
      
      

    })
    

  }
  // }
  nextQuestion(){
    this.currentQuestion++ ;

  }
  previousQuestion(){
    this.currentQuestion-- ;

  }
  answer(currentQno:number, options:any){
   
    
    if(options.correct){
      this.points+=3;
      this.correctAnswer++;
      setTimeout(()=>{
        this.currentQuestion++;
        this.resetCounter();

      },1000);
      

    }
    else{
      setTimeout(()=>{
        this.inCorrectAnswer++;
      this.currentQuestion++;
      this.resetCounter();


      },1000);
      this.points-=1;
      
    }
    if(currentQno===this.questionList.length){
      this.isQuizCompleted=true;
      this.stopCounter();
    }

  }
  startCounter(){
    this.interval$ = interval(1000)
    .subscribe(val=>{
      this.counter--;
      if(this.counter===0){
        this.currentQuestion++;
        this.counter=60;
        this.points-=1;
      }
    });
    setTimeout(()=>{
      this.interval$.unsubscribe()

    },600000);

  }
  stopCounter(){
    this.interval$.unsubscribe();
    this.counter=0;

  }
  resetCounter(){
    this.stopCounter();
    this.counter=60;
    this.startCounter();

  }
}