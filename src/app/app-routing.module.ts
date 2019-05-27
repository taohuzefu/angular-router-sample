import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HeroListComponent} from './heroes/hero-list/hero-list.component';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: 'crisis-center', component: CrisisListComponent},
  // {path: 'heroes', component: HeroListComponent},
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
