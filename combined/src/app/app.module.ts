import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { HttpModule}  from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { FacebookModule } from 'ngx-facebook';
import { NewQuestionnaireComponent } from './new-question/new-questionnaire.component';
import { ResultsComponent } from './results/results.component';
import { EntertainmentComponent } from './Entertainment.component';
import { TechnologyComponent } from './Technology.component';
import { HistoryComponent } from './History.component';
import { RandomComponent } from './Random.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
	EntertainmentComponent,
	TechnologyComponent,
	HistoryComponent,
	RandomComponent,
	DashboardComponent
  ],
  imports: [BrowserModule,
			FormsModule,
			HttpModule,
			FacebookModule.forRoot(), 
			AppRoutingModule],
  providers: [NewQuestionnaireComponent, ResultsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
