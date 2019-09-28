import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { ForgotComponent } from "./auth/forgot/forgot.component";
import { AuthorizeService } from "./auth/authorize.service";
import { HttpClientModule ,HTTP_INTERCEPTORS} from "@angular/common/http";
import { AdmindashboardComponent } from "./AdminModule/admin/admindashboard/admindashboard.component";
import { HeaderComponent } from "./AdminModule/admin/admindashboard/header/header.component";
import { FooterComponent } from "./AdminModule/admin/admindashboard/footer/footer.component";
import { SidenavComponent } from "./AdminModule/admin/admindashboard/sidenav/sidenav.component";
import { UserManagementComponent } from "./AdminModule/admin/admindashboard/user-management/user-management.component";
import { TermsComponent } from "./AdminModule/admin/admindashboard/terms/terms.component";
import { ModalComponent } from "./AdminModule/admin/admindashboard/modal/modal.component";
import { AuthGuard } from "./auth/auth.guard";
import { VerifyComponent } from "./auth/verify/verify.component";
import { ProfileComponent } from "./UserModule/ShareModule/profile.component";
import { UserSidenavComponent } from "./UserModule/user-sidenav/user-sidenav.component";
import { AnalyticsComponent } from "./AdminModule/admin/admindashboard/analytics/analytics.component";
import { HomeComponent } from "./UserModule/home/home.component";
import { FriendlistComponent } from "./UserModule/FriendModule/friendlist/friendlist.component";
import { AddfriendComponent } from "./UserModule/FriendModule/addfriend/addfriend.component";
import { MonitorComponent } from "./AdminModule/admin/admindashboard/monitor/monitor.component";
import { UserHeaderComponent } from "./UserModule/user-header/user-header.component";
import { CompleteComponent } from "./auth/complete/complete.component";
import { AboutusComponent } from "./UserModule/aboutus/aboutus.component";
import { UserTermsComponent } from "./UserModule/user-terms/user-terms.component";
import { UpdateUserProfileComponent } from "./UserModule/update-user-profile/update-user-profile.component";
import { ViewUserProfileComponent } from "./UserModule/view-user-profile/view-user-profile.component";
import { SearchPipe } from "./UserModule/FriendModule/addfriend/search.pipe";
import { InterceptorService } from './auth/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    AdmindashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    UserManagementComponent,
    TermsComponent,
    ModalComponent,
    VerifyComponent,
    ProfileComponent,
    UserSidenavComponent,
    AnalyticsComponent,
    HomeComponent,
    FriendlistComponent,
    AddfriendComponent,
    MonitorComponent,
    UserHeaderComponent,
    CompleteComponent,
    AboutusComponent,
    UserTermsComponent,
    UpdateUserProfileComponent,
    ViewUserProfileComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: "never" }),
    HttpClientModule
  ],
  providers: [AuthorizeService, AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
