import { Component, OnInit } from '@angular/core';

import { Crisis } from '../hero';
import { CrisisService } from '../hero.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class CrisisListComponent implements OnInit {

  heroes$: Observable<Crisis[]>;
  selectedId: number;

  constructor(private service: CrisisService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getHeroes();
      })
    );
  }
}
