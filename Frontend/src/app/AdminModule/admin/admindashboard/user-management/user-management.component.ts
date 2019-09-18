import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";

import { AdminService } from "../admin.service";

@Component({
  selector: "app-user-management",
  templateUrl: "./user-management.component.html",
  styleUrls: ["./user-management.component.css"]
})
export class UserManagementComponent implements OnInit {
  value: any;
  users = [];
  usertoBlock: any;
  usertoUnblock: any;
  userBlocked = false;
  constructor(private user: AdminService) {}

  ngOnInit() {
    this.user.manageUsers().subscribe(data => {
      this.value = data;

      for (let i = 0; i <= this.value.length; i++) {}
    });
  }

  blockUser() {
    this.user.blockUserAccess({ email: this.usertoBlock }).subscribe(res => {
      console.log("Response", res);
      this.userBlocked = true;
      console.log("user to block", this.usertoBlock);
    });
  }

  unblockUser() {
    this.user.unblockUserAccess({ email: this.usertoBlock }).subscribe(res => {
      console.log(res);
      console.log("user to unblock", this.usertoUnblock);
    });
  }
}
