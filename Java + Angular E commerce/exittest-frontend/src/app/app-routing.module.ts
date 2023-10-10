import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import {ProductsComponent} from './products/products.component'
import { DetailsComponent } from './details/details.component'
import {AuthGuard} from './auth.guard'

const routes: Routes = [
  {
    component: LoginComponent,
    path:'login'
  },
  {
    component: RegisterComponent,
    path:'register'
  },
  {
    path:'', redirectTo:'/login', pathMatch:'full'
  },
  {
    component: ProductsComponent,
    path :'product',
    canActivate :[AuthGuard]
  },
  {
    component: DetailsComponent,
    path :'details',
    canActivate :[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
