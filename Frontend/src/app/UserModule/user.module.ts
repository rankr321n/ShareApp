import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendlistComponent } from './FriendModule/friendlist/friendlist.component';
import { AddfriendComponent } from './FriendModule/addfriend/addfriend.component';
import { HomeComponent } from './home/home.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { SidenavComponent } from '../AdminModule/admin/admindashboard/sidenav/sidenav.component';
import { UserHeaderComponent } from './user-header/user-header.component';



@NgModule({
  declarations: [FriendlistComponent, AddfriendComponent, HomeComponent, UpdateProfileComponent,SidenavComponent, UserHeaderComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
