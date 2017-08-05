import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { GreenspaceAppRoutingModule } from './app-routing.module'
import { GreenspacesComponent } from './greenspaces/greenspaces.component';
import { GreenspacesListComponent } from './greenspaces/greenspaces-list/greenspaces-list.component';

import { greenspaces, GreenspacesService } from './shared';
import { HomeComponent } from './home/home.component';
import { CreateGreenspaceComponent } from './create-greenspace/create-greenspace.component';

@NgModule({
  declarations: [
    AppComponent,
    GreenspacesComponent,
    GreenspacesListComponent,
    HomeComponent,
    CreateGreenspaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GreenspaceAppRoutingModule,
    StoreModule.provideStore({ greenspaces })
  ],
  providers: [ GreenspacesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
