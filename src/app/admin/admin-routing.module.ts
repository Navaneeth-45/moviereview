import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmoviesComponent } from './addmovies/addmovies.component';
import { AdminComponent } from './admin.component';
import { SeemoviesComponent } from './seemovies/seemovies.component';


const routes: Routes = [{ path: '', component: AdminComponent ,children:[
  {path:'addmovies',component:AddmoviesComponent},
{path:'seemovies',component:SeemoviesComponent},
{path:'',redirectTo:'seemovies',pathMatch:'full'},
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
