import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  // [x: string]: any;

  constructor(private http: HttpClient) { }
  getQuestionJson(){
    return this.http.get<any>("http://localhost:8484/questions/")
  }
  fetchAllQuestions(){
    return this.http.get('http://localhost:8484/questions/');
  }
  deleteQuestions(id: number){
    return this.http.delete( 'http://localhost:8484/questions/' + id)
  }
  addQuestion(question: any){
    return this.http.post('http://localhost:8484/questions/', question)
 }
}
