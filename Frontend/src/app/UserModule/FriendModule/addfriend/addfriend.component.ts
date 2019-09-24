import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { UserService } from "../../user.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-addfriend",
  templateUrl: "./addfriend.component.html",
  styleUrls: ["./addfriend.component.css"]
})
export class AddfriendComponent implements OnInit {
  users: any;
  constructor(private api: UserService,private router:Router) {}
  usersearch = "";
  
  private error = null;

  private friend = {};
  private showFriend = false;
  ngOnInit() {

    // this.onFindFriend()
    this.api.getReguser().subscribe(res => {
      this.users = res;
    });
  }
  onFindFriend() {
    console.log(this.usersearch);
    
    this.api.searchFriend(this.friend).subscribe(
      res => {
        console.log(res);
        this.showFriend = true;
        this.friend = res;
      },
      err => {
        console.log(err);
        this.error = err.error;
        setTimeout(() => {
          this.error = null;
        }, 3000);
      }
    );
  }

  onSendRequest(useremail:any) {
    console.log(this.friend);
    this.api.sendFriendRequest(useremail).subscribe(
      res => {
        console.log("Request Sent");
        console.log(res);
        this.router.navigate(["/user"]);
      },
      err => {
        console.log(err);
        this.error = err.error;
        setTimeout(() => {
          this.error = null;
        }, 3000);
      }
    );
  }
}
