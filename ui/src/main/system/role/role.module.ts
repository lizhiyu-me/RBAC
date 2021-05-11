import { mainRoutes } from './../../../environments/routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { pathToFileURL } from 'url';



@NgModule({
  declarations: [
    RoleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component:RoleComponent
      }
    ]),
  ],
  exports:[RouterModule]
})
export class RoleModule { }
