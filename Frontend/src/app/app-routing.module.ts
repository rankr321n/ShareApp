import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { ForgotComponent } from "./auth/forgot/forgot.component";
import { AdmindashboardComponent } from "./AdminModule/admin/admindashboard/admindashboard.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "forgot", component: ForgotComponent },
  { path: "admin", component: AdmindashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
