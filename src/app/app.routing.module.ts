import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExtratoComponent } from './extrato/extrato.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.compenent';

export const routes: Routes = [
  {
    path: 'extrato', component: ExtratoComponent
  },
  {
    path: 'nova-transferencia', component: NovaTransferenciaComponent
  },
  {
    path: '', redirectTo: 'nova-transferencia', pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
