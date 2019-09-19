import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";

import { AdminService } from "../admin.service";
import { BehaviorSubject } from "rxjs";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-user-management",
  templateUrl: "./user-management.component.html",
  styleUrls: ["./user-management.component.css"]
})
export class UserManagementComponent implements OnInit {
  users: any = [];
  response: any;
  constructor(private user: AdminService) {}

  ngOnInit() {
    this.user.manageUsers().subscribe(data => {
      this.users = data;
    });
  }

  blockUser(email: any) {
    this.user.blockUserAccess({ email: email }).subscribe(res => {
      console.log(res.msg);
      this.response = res.msg;
      window.alert(res.msg);
    });
  }

  unblockUser(email: any) {
    this.user.unblockUserAccess({ email: email }).subscribe(res => {
      console.log(res);
      this.response = res.msg;
      window.alert(res.msg);
    });
  }
}
