import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { GreenspacesComponent } from './greenspaces/greenspaces.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'greenspaces', component: GreenspacesComponent},
    {path: '**', redirectTo: '/home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class GreenspaceAppRoutingModule { }