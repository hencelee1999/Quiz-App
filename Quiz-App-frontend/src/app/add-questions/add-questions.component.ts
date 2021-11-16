import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../service/questions.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {

  constructor(private questionservice: QuestionsService) { }

  ngOnInit(): void {
  }
  addQuestion(questionText: String, options: String[], correct:number){
    this.questionservice.addQuestion({questionText,options,correct})
    .subscribe((res: any) => {
      console.log(res);
      // this.courses = res;
    });
  }


}
