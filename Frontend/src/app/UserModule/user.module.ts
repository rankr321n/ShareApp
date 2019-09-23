import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FriendlistComponent } from "./FriendModule/friendlist/friendlist.component";
import { AddfriendComponent } from "./FriendModule/addfriend/addfriend.component";
import { HomeComponent } from "./home/home.component";

import { SidenavComponent } from "../AdminModule/admin/admindashboard/sidenav/sidenav.component";
import { UserHeaderComponent } from "./user-header/user-header.component";
import { AboutusComponent } from "./aboutus/aboutus.component";

import { UserTermsComponent } from "./user-terms/user-terms.component";
import { UpdateUserProfileComponent } from "./update-user-profile/update-user-profile.component";
import { ViewUserProfileComponent } from "./view-user-profile/view-user-profile.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SearchPipe } from "./FriendModule/addfriend/search.pipe";
@NgModule({
  declarations: [
    FriendlistComponent,
    AddfriendComponent,
    HomeComponent,
    SidenavComponent,
    UserHeaderComponent,
    AboutusComponent,
    UserTermsComponent,
    UpdateUserProfileComponent,
    ViewUserProfileComponent,
    SearchPipe
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule]
})
export class UserModule {}
