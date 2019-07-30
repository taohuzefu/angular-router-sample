import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import {CrisisCenterComponent} from './crisis-center/crisis-center/crisis-center.component';



@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    PageNotFoundComponent,
    CrisisCenterComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
