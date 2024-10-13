import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouteGardService } from './route-gard.service';
import { RouteGardServicetoinfo } from './route-gardtoinfo-update.service';



export const routes: Routes = [
    {path:"", component:LoginComponent},
    {path:"sginup", component:SignUpComponent},
    {path:"home", component:HomePageComponent ,canActivate:[RouteGardService]},
    {
        path: 'updateInfo',
        loadChildren: () => import('./update-info/update-info.module').then(m => m.UpdateInfoModule) ,canActivate:[RouteGardServicetoinfo]
      }
];
