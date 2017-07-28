import { Component, OnInit } from '@angular/core';

import { Hero } from './Hero/hero';
import { HeroesComponent } from './Hero/heroes.component';
import { HeroService } from './services/hero.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})

export class AppComponent {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void{
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
