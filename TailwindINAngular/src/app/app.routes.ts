import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    {path:"", component:LoginComponent},
    {path:"sginup", component:SignUpComponent},
    {path:"home", component:HomePageComponent},
];
