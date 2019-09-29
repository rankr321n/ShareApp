import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./admindashboard/footer/footer.component";
import { SidenavComponent } from "./admindashboard/sidenav/sidenav.component";
import { UserManagementComponent } from "./admindashboard/user-management/user-management.component";
import { TermsComponent } from "./admindashboard/terms/terms.component";
import { ModalComponent } from "./admindashboard/modal/modal.component";
import { AnalyticsComponent } from "./admindashboard/analytics/analytics.component";
import { MonitorComponent } from "./admindashboard/monitor/monitor.component";
import { DashboardComponent } from './admindashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [
    FooterComponent,
    SidenavComponent,
    UserManagementComponent,
    TermsComponent,
    ModalComponent,
    AnalyticsComponent,
    MonitorComponent,
    DashboardComponent
  ],
  imports: [CommonModule]
})
export class AdminModule {}
