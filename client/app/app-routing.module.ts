import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { GreenspacesComponent } from './greenspaces/greenspaces.component';
import { CreateGreenspaceComponent } from './create-greenspace/create-greenspace.component';
import { CreateAccountComponent } from './create-account/create-account.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'greenspaces', component: GreenspacesComponent},
    {path: 'create-greenspace', component: CreateGreenspaceComponent},
    {path: 'create-account', component: CreateAccountComponent},
    {path: '**', redirectTo: '/home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class GreenspaceAppRoutingModule { }