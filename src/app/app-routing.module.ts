import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ReadingListComponent } from './reading-list/reading-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: AboutComponent },
  { path: 'todo',     component: ToDoComponent },
  { path: 'reading', component: ReadingListComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
