import { Component, OnInit } from "@angular/core";

import { AdminService } from "../admin.service";

@Component({
  selector: "app-user-management",
  templateUrl: "./user-management.component.html",
  styleUrls: ["./user-management.component.css"]
})
export class UserManagementComponent implements OnInit {
  value: any;
  usertoBlock: any;
  constructor(private user: AdminService) {}

  ngOnInit() {
    this.user.manageUsers().subscribe(data => {
      this.value = data;
      for (let item of this.value) {
        this.usertoBlock = item.email;
      }
    });
  }

  blockUser() {
    console.log(this.usertoBlock);

    this.user.blockUserAccess({ email: this.usertoBlock }).subscribe();
  }
}
