import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";

import { AdminService } from "../admin.service";
import { BehaviorSubject } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: "app-user-management",
  templateUrl: "./user-management.component.html",
  styleUrls: ["./user-management.component.css"]
})
export class UserManagementComponent implements OnInit {
  
  userStatus=false
  users:any=[]
  constructor(private user: AdminService) {}

  ngOnInit() {
    this.user.manageUsers().subscribe( data=> {
      this.users=data
    });
    
  }

  blockUser(email:any) {
    this.user.blockUserAccess( {email:email} ).subscribe(res => {
      console.log( res);
      this.userStatus=true
      // console.log("user to block", this.usertoBlock);
    });
  }

  unblockUser(email:any) {
    this.user.unblockUserAccess({ email:email}).subscribe(res => {
      console.log(res);
      // console.log("user to unblock", this.usertoUnblock);
    });
  }
}
