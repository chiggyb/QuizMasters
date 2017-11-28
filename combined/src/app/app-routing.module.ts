import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { EntertainmentComponent } from './Entertainment.component';
import { TechnologyComponent } from './Technology.component';
import { HistoryComponent } from './History.component';
import { RandomComponent } from './Random.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'random', component: RandomComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
