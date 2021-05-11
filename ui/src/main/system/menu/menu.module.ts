import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: MenuComponent
    }]),
  ],
  exports: [RouterModule]
})
export class MenuModule { }
