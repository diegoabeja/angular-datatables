import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableComponent } from './data-table/data-table.component';
import { AssumptionComponent } from './assumption/assumption.component';
import { FutureWorkComponent } from './future-work/future-work.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'table', component: DataTableComponent },
  { path: 'assumption', component: AssumptionComponent },
  { path: 'future-work', component: FutureWorkComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
