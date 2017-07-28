import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ToDoComponent } from './to-do/to-do.component';

import {AppRoutingModule} from './app-routing.module';
import { DataVisualizationComponent } from './data-visualization/data-visualization.component';
import { ReadingListComponent } from './reading-list/reading-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ToDoComponent,
    DataVisualizationComponent,
    ReadingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
