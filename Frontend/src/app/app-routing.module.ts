import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { ForgotComponent } from "./auth/forgot/forgot.component";
import { AdmindashboardComponent } from "./AdminModule/admin/admindashboard/admindashboard.component";
import { UserManagementComponent } from "./AdminModule/admin/admindashboard/user-management/user-management.component";
import { TermsComponent } from "./AdminModule/admin/admindashboard/terms/terms.component";
import { ModalComponent } from "./AdminModule/admin/admindashboard/modal/modal.component";
import { AuthGuard } from "./auth/auth.guard";

import { VerifyComponent } from "./auth/verify/verify.component";
import { ProfileComponent } from "./UserModule/ShareModule/profile.component";
import { AnalyticsComponent } from "./AdminModule/admin/admindashboard/analytics/analytics.component";
import { HomeComponent } from "./UserModule/home/home.component";
import { AddfriendComponent } from "./UserModule/FriendModule/addfriend/addfriend.component";
import { MonitorComponent } from "./AdminModule/admin/admindashboard/monitor/monitor.component";
import { FriendlistComponent } from './UserModule/FriendModule/friendlist/friendlist.component';
import { CompleteComponent } from './auth/complete/complete.component';
import { AboutusComponent } from './UserModule/aboutus/aboutus.component';
import { UserTermsComponent } from './UserModule/user-terms/user-terms.component';
import { UpdateUserProfileComponent } from './UserModule/update-user-profile/update-user-profile.component';
import { ViewUserProfileComponent } from './UserModule/view-user-profile/view-user-profile.component';
import { DashboardComponent } from './AdminModule/admin/admindashboard/dashboard/dashboard.component';
import { MultiUploadComponent } from './UserModule/ShareModule/multi-upload/multi-upload.component';
import { ViewFilesComponent } from './UserModule/ShareModule/view-files/view-files.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "forgot", component: ForgotComponent },
  { path: "complete", component: CompleteComponent },
  {
    path: "admin",
    component: AdmindashboardComponent,
    canActivate: [AuthGuard],
    
    children: [
      {path:"",component:DashboardComponent},
      { path: "manage-user", component: UserManagementComponent },
      { path: "terms", component: TermsComponent },
      { path: "analytics", component: AnalyticsComponent },
      { path: "monitor", component: MonitorComponent }
      
    ]
  },
  { path: "alert", component: ModalComponent },
  { path: "verify/:token", component: VerifyComponent },
  
  { path: "user", component: HomeComponent ,
  canActivate:[AuthGuard],

  children:[
    {path:"addfriend",component:AddfriendComponent},
    {path:"friends",component:FriendlistComponent},
    { path: "drive", component: ProfileComponent },
    {path:"about",component:AboutusComponent},
    {path:"terms", component:UserTermsComponent},
    {path:"updateprofile",component:UpdateUserProfileComponent},
    {path:"viewprofile",component:ViewUserProfileComponent},
    {path:"file-upload",component:MultiUploadComponent},
    {path:"view-upload",component:ViewFilesComponent}
    
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
