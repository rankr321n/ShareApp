import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './admindashboard/footer/footer.component';
import { SidenavComponent } from './admindashboard/sidenav/sidenav.component';
import { UserManagementComponent } from './admindashboard/user-management/user-management.component';



@NgModule({
  declarations: [FooterComponent, SidenavComponent, UserManagementComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
