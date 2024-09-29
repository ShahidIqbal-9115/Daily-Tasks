import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';


export const routes: Routes = [
    {path:"", component:TableComponent},
    {path:"forms", component:FormComponent},
];
