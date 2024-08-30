import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStockComponent } from './add-stock/add-stock.component';
import { ShowStockComponent } from './show-stock/show-stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { addStockGuard } from './guards/add-stock.guard';

const routes: Routes = [
  {path:'add-stock',component:AddStockComponent,canActivate:[addStockGuard]},
  {path:'register-user',component:RegisterComponent},
  {path:'login-user',component:LoginComponent},
  {path:'show-stock',component:ShowStockComponent,
    children:[{path:'edit-stock/:id',component:EditStockComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
