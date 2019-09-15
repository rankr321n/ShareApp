import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './admindashboard/footer/footer.component';
import { SidenavComponent } from './admindashboard/sidenav/sidenav.component';



@NgModule({
  declarations: [FooterComponent, SidenavComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
