import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";

import { AdminService } from "../admin.service";

@Component({
  selector: "app-user-management",
  templateUrl: "./user-management.component.html",
  styleUrls: ["./user-management.component.css"]
})
export class UserManagementComponent implements OnInit {
  users: any = [];
  response: any;
  alert: string;
  managebutton: any
  constructor(private user: AdminService) { }

  ngOnInit() {
    window.setTimeout(function () {
      $(".alert-danger").fadeTo(500, 0).slideUp(500, function () {
        $(this).remove();
      });
      $(".alert-success").fadeTo(500, 0).slideUp(500, function () {
        $(this).remove();
      });
    }, 2000);

    this.user.manageUsers().subscribe(data => {
      this.users = data;


    });
  }

  blockUser(email: any) {
    this.user.blockUserAccess({ email: email }).subscribe(res => {

      this.response = res.msg;

      this.alert = "true";

      // window.alert(res.msg);
    });
  }

  unblockUser(email: any) {
    this.user.unblockUserAccess({ email: email }).subscribe(res => {

      this.response = res.msg;

      this.alert = "false";

    });
  }
}
