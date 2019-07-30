import {Component, OnInit} from '@angular/core';
import {Crisis} from '../crisis';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CrisisService} from '../crisis.service';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

  hero$: Observable<Crisis>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: CrisisService) {
  }

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id')))
    );
  }

  gotoHeroes(hero: Crisis) {
    const heroId = hero ? hero.id : null;
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }

}
