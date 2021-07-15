import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminGuard } from './admin.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RateusComponent } from './rateus/rateus.component';
import { SeeratingsComponent } from './seeratings/seeratings.component';
import { TopimdbComponent } from './topimdb/topimdb.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ViewmoviesComponent } from './viewmovies/viewmovies.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'movies',component:MoviesComponent},
  {path:'movies/:id',component:ViewmoviesComponent},
  {path:'topimdb',component:TopimdbComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'login',component:LoginComponent},
  {path:'userprofile',component:UserprofileComponent,children:[
    {path:'rateus',component:RateusComponent},
    {path:'seeratings',component:SeeratingsComponent},
    {path:'',redirectTo:'/userprofile/rateus',pathMatch:'full'},

  
  ]},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),canActivate:[AdminGuard] },
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
