import { Routes } from '@angular/router';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';

export const routes: Routes = [
    {path:"directive", component:CustomDirectiveComponent},
    {path:"pipe", component:CustomPipeComponent},
];
