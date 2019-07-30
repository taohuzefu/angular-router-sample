import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';

import {Crisis} from './hero';
import {HEROES} from './mock-heroes';
import {MessageService} from '../message.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {

  constructor(private messageService: MessageService) {
  }

  getHeroes(): Observable<Crisis[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number | string) {
    return this.getHeroes().pipe(
      // (+) before `id` turns the string into a number
      map((heroes: Crisis[]) => heroes.find(hero => hero.id === +id))
    );
  }
}
