import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'The Slash', stats: 'Fast claw attacks' },
      { id: 11, name: 'Mr. Meowtastic', stats: 'Super stretchy paws' },
      { id: 12, name: 'Pouncer', stats: 'Super jump' },
      { id: 13, name: 'Cat Canary', stats: 'Loudest meow' },
      { id: 14, name: 'Catsanova', stats: 'Super loveable' },
      { id: 15, name: 'Super Cat', stats: 'One of the strongest cats' },
      { id: 16, name: 'Galacticat', stats: 'Space cat' },
      { id: 17, name: 'Dynameow', stats: 'Exposive powers' },
      { id: 18, name: 'Linton', stats: 'The best.' },
      { id: 19, name: 'Purrfessor X', stats: 'Telepathic cat' },
      { id: 20, name: 'Catman', stats: 'He is the night' }
    ];
    return {heroes};
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/