import { Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { StockComponent } from './stock/stock.component';

export const routes: Routes = [
    {path:"forms", component:FormsComponent},
    {path:"stock", component:StockComponent},
]
