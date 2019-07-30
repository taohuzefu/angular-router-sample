import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrisisListComponent} from './crisis-list/hero-list.component';
import {CrisesDetailComponent} from './crisis-detail/hero-detail.component';

const heroesRoutes: Routes = [
  {path: 'heroes', component: CrisisListComponent},
  {path: 'hero/:id', component: CrisesDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(heroesRoutes)],
  exports: [RouterModule]
})
export class CrisesRoutingModule { }
