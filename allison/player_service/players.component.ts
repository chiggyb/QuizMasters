import { ChangeDetectorRef, Component, OnInit } from '@angular/core'

import { Players }        from './players';
import { PlayersService } from './players.service';

@Component({
  selector: 'the-players',
})
export class PlayersCheck implements OnInit {
  constructor(private ref: ChangeDetectorRef, private playersService: PlayersService) {
    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 5000); 
  }
	ngOnInit() {
    this.getPlayers();
  }
   getPlayers(): void {
    this.playersService.getPlayers()
    .subscribe(players => this.players = players);
  }
	}