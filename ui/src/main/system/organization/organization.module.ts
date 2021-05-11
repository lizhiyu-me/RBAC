import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationComponent } from './organization.component';



@NgModule({
  declarations: [
    OrganizationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'',
      component:OrganizationComponent
    }])
  ],
  exports:[RouterModule]
})
export class OrganizationModule { }
