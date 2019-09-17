import { Component, OnInit } from "@angular/core";
import { AuthorizeService } from "src/app/auth/authorize.service";

@Component({
  selector: "app-user-management",
  templateUrl: "./user-management.component.html",
  styleUrls: ["./user-management.component.css"]
})
export class UserManagementComponent implements OnInit {
  value: any;
  constructor(private user: AuthorizeService) {}

  ngOnInit() {
    this.user.authenticate(this.value).subscribe(data => {
      console.log(data);
    });
  }
}
