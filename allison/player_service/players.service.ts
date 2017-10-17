import { Injectable } from '@angular/core';

import { Players } from './players';
import { PLAYERS } from './mock-players';

@Injectable()
export class PlayersService {

  getPlayers(): Promise<Players[]> {
	  return Promise.resolve(PLAYERS);
  }
  
}
