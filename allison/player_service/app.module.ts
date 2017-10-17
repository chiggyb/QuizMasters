import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { PlayerListService } from './player-list.service';
import { PlayersService } from './players.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
