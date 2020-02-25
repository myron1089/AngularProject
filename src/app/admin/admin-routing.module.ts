import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AutorizationComponent } from './pages/autorization/autorization.component';

const routes: Routes = [
    {path:'',redirectTo:'/admin',pathMatch:'full'},
    {
   path: 'admin', component: HomePageComponent,
    children: [ {path: 'singin', component:AutorizationComponent, pathMatch: 'full'},]}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }