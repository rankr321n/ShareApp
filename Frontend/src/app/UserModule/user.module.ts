import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendlistComponent } from './FriendModule/friendlist/friendlist.component';
import { AddfriendComponent } from './FriendModule/addfriend/addfriend.component';
import { HomeComponent } from './FriendModule/home/home.component';
import { UpdateProfileComponent } from './FriendModule/update-profile/update-profile.component';



@NgModule({
  declarations: [FriendlistComponent, AddfriendComponent, HomeComponent, UpdateProfileComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
