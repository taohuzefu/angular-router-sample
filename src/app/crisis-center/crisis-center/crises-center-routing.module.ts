import {CrisisCenterComponent} from './crisis-center.component';
import {CrisisCenterHomeComponent} from '../crisis-center-home/crisis-center-home.component';
import {RouterModule, Routes} from '@angular/router';
import {CrisisDetailComponent} from '../crisis-detail/crisis-detail.component';
import {CrisisListComponent} from '../../crisis-list/crisis-list.component';
import {NgModule} from '@angular/core';

const crisisCenterRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [{
      path: '',
      component: CrisisListComponent,
      children: [
        {path: ':id', component: CrisisDetailComponent},
        {path: '', component: CrisisCenterHomeComponent},
      ]
    }],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class CrisesCenterRoutingModule {
}
