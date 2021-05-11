import { layoutRoutes } from './../environments/routes';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot(layoutRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}