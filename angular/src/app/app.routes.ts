import { Routes } from '@angular/router';
import { RouteOneComponent } from './route-one/route-one.component';
import { RouteTwoComponent } from './route-two/route-two.component';
import { RouteThreeComponent } from './route-three/route-three.component';

export const routes: Routes = [
    {path:"RouteOne", component:RouteOneComponent},
    {path:"RouteTwo", component:RouteTwoComponent},
    {path:"RouteThree", component:RouteThreeComponent},
];
