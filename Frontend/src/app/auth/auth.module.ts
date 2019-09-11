import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./register/register.component";
import { ForgotComponent } from "./forgot/forgot.component";

@NgModule({
  declarations: [RegisterComponent, ForgotComponent],
  imports: [CommonModule]
})
export class AuthModule {}
