import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { GreenspaceAppRoutingModule } from './app-routing.module'
import { GreenspacesComponent } from './greenspaces/greenspaces.component';
import { GreenspacesListComponent } from './greenspaces/greenspaces-list/greenspaces-list.component';

import { GreenspacesService, UsersService, reducer } from './shared';

import { CreateGreenspaceComponent } from './create-greenspace/create-greenspace.component';
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    GreenspacesComponent,
    GreenspacesListComponent,
    HomeComponent,
    CreateGreenspaceComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GreenspaceAppRoutingModule,
    StoreModule.provideStore(reducer)
  ],
  providers: [ GreenspacesService, UsersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
