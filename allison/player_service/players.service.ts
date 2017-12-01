import { Injectable } from '@angular/core';

import { Players } from './players';
import { PLAYERS } from './mock-players';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PlayersService {

  getPlayers(): Promise<Players[]> {
	  return Promise.resolve(PLAYERS);
  }
  
}
