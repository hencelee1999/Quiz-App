import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full'},
  { path:'login', component :LoginComponent},
  { path:'signup', component :SignupComponent},
  { path:'welcome', component :WelcomeComponent},
  { path:'question', component :QuestionComponent},
  { path:'home', component :HomePageComponent},
  { path:'addQuestion', component :AddQuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
