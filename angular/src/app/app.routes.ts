import { Routes } from '@angular/router';
import { RouteOneComponent } from './route-one/route-one.component';
import { RouteTwoComponent } from './route-two/route-two.component';
import { RouteThreeComponent } from './route-three/route-three.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ChildThreeComponent } from './child-three/child-three.component';


export const routes: Routes = [
    {path:"RouteOne", component:RouteOneComponent},
    {path:"RouteTwo", component:RouteTwoComponent},
    {path:"RouteThree", component:RouteThreeComponent},
    {path:"ChildOne", component:ChildOneComponent},
    {path:"ChildTwo", component:ChildTwoComponent},
    {path:"ChildThree", component:ChildThreeComponent},
];
