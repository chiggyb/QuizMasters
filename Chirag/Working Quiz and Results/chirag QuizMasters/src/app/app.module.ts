import { QuizService } from './services/quiz.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { QuizComponent } from './components/quiz.component';
import { PageNotFoundComponent  } from './components/not-found.component';
import { ScoreComponent  } from './components/score.component';
import { HomeComponent  } from  './components/home.component';
import {routing} from './app.routing';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
 
@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    PageNotFoundComponent,
    ScoreComponent,
    HomeComponent,
    CountdownTimerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
