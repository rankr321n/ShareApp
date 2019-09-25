import { Component, OnInit } from "@angular/core";
// import { UserService } from "../user.service";
import { AuthorizeService } from 'src/app/auth/authorize.service';
import { UserService } from '../user.service';

@Component({
  selector: "app-user-header",
  templateUrl: "./user-header.component.html",
  styleUrls: ["./user-header.component.css"]
})
export class UserHeaderComponent implements OnInit {
  private loggedInUser = {};
  private receivedRequests: [];
  private totalRequests = 0;
  private requesterid={}
  constructor(private api:AuthorizeService,private acc:UserService) {}
  
  ngOnInit() {
    this.api.getCurrentUser().subscribe(res=>{
      this.loggedInUser = res;
     
      this.receivedRequests = this.loggedInUser["receivedRequests"].slice();
         
          this.totalRequests = this.receivedRequests.length;
        })

  }

acceptRequest(requesterid){
  console.log(requesterid);
  this.acc.acceptFriendRequest({id:requesterid}).subscribe(res=>{
    
    console.log(res);
    
  })

}

}
