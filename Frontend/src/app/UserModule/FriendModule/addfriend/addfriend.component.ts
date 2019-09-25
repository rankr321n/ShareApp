import { Component, OnInit } from "@angular/core";
// import { Observable } from "rxjs";
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
   sent:any
  // private friend = {};
  // private showFriend = false;
  ngOnInit() {

    
    this.api.getReguser().subscribe(res => {
      this.users = res;
    });
  }
 
  onSendRequest(email,id:any) {
    // console.log(this.friend);
    this.api.sendFriendRequest({email:email},id).subscribe(
      res => {
        

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
