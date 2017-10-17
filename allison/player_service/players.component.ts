import { ChangeDetectorRef, Component } from '@angular/core'

import { Players }        from './players';
import { PlayersService } from './players.service';

@Component({
  selector: 'the-players',
})
class playersCheck {
  constructor(private ref: ChangeDetectorRef, private playersService: PlayersService) {
    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 5000); 
	
  }
}