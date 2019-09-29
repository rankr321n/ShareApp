import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";

import { AdminService } from "../admin.service";
import { AuthorizeService } from 'src/app/auth/authorize.service';

@Component({
  selector: "app-user-management",
  templateUrl: "./user-management.component.html",
  styleUrls: ["./user-management.component.css"]
})
export class UserManagementComponent implements OnInit {
  users: any = [];
  response: any;
  alert:any
  managebutton: any
  constructor(private user: AdminService,private auth:AuthorizeService) { }

  ngOnInit() {
   
    this.user.manageUsers().subscribe(data => {
      this.users = data;
      // console.log(data);
      
  if(data.message){
 this.auth.logout()
  
}
 });
  }

  blockUser(email: any) {
    this.user.blockUserAccess({ email: email }).subscribe(res => {

      this.response = res.msg;

      this.alert = !this.alert;

      // window.alert(res.msg);
    });
  }

  unblockUser(email: any) {
    this.user.unblockUserAccess({ email: email }).subscribe(res => {

      this.response = res.msg;

      this.alert =!this.alert

    });
  }
}
