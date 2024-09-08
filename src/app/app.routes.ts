import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'prodetails/:id',component:ProductDetailsComponent},
    {path:'signup',component:SignupComponent},
    {path:'**',component:NotFoundPageComponent},
];