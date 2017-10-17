import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { HttpModule}  from '@angular/http';
import { AppComponent }  from './app.component';
import {FacebookModule} from 'ngx-facebook';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,FacebookModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
