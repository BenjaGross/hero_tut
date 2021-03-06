import { Injectable } from '@angular/core'

import { Hero } from '../hero/hero';
import { HEROES } from '../hero/mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
