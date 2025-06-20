import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Colaboradores } from './colaboradores/colaboradores';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuLateral } from './menu-lateral/menu-lateral';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    Colaboradores,
    Dashboard,
    Login,
    MenuLateral
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule
  ],
  exports: [
    Login
  ]
})
export class PagesModule {}