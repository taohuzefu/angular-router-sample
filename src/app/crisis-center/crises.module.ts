import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisesRoutingModule } from './crises-routing.module';
import {FormsModule} from '@angular/forms';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import {CrisisDetailComponent} from './crisis-detail/crisis-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisesRoutingModule,
  ],
  declarations: [CrisisDetailComponent, CrisisListComponent, CrisisCenterComponent, CrisisCenterHomeComponent],
})
export class CrisesModule { }
