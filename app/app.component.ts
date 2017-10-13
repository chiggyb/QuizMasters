import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

//import { PlayerList } from './player-list';
import { Players } from './players';
//import { PlayerListService } from './player-list.service';
import { PlayersService } from './players.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayersService]
})
export class AppComponent implements OnInit {
  title = 'Test of Player services';
  players: Players[];

 constructor(private ref:ChangeDetectorRef, private playersService: PlayersService) { }
 //constructor(private playersService: PlayersService) { }
  
 // getPlayerList(): void {
 //   this.playerListService.getPlayerList().then(playerList => this.playerList = playerList);
 // }
  
  getPlayers(): void {
    this.playersService.getPlayers().then(players => this.players = players);
  }
  
  
  ngOnInit(): void {
  this.getPlayers();
  }

}