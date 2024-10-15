import { Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    {path:"table", component:TableComponent},
    {path:"forms/:type/:id", component:FormComponent},
];
