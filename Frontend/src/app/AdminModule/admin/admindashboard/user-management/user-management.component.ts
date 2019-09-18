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

      for (let item of this.value) {
        // console.log(item.email);
        this.users.push(item.email);
      }
    });
  }

  blockUser() {
    console.log("user to block");

    this.user.blockUserAccess({ email: this.usertoBlock }).subscribe(res => {
      console.log("Response", res);
      this.userBlocked = true;
    });
  }

  unblockUser() {
    console.log("user to unblock");

    this.user
      .unblockUserAccess({ email: this.usertoUnblock })
      .subscribe(res => {
        console.log(res);
      });
  }
}
