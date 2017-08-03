import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { GreenspacesComponent } from './greenspaces/greenspaces.component';
import { GreenspacesListComponent } from './greenspaces/greenspaces-list/greenspaces-list.component';

import { greenspaces, GreenspacesService } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    GreenspacesComponent,
    GreenspacesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ greenspaces })
  ],
  providers: [ GreenspacesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
