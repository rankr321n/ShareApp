import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from 'src/app/auth/authorize.service';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent implements OnInit {
  private loggedInUser = {};
  private friendlist: [];
  private totalfriends = 0;
 private friendsdata:[]
  constructor(private api:AuthorizeService) { }

  ngOnInit() {
    this.api.getCurrentUser().subscribe(res=>{
      this.loggedInUser = res;
      // console.log(res);
      
      this.friendlist = this.loggedInUser["friends"].slice();
        this.friendsdata=this.friendlist 
        console.log(this.friendsdata);
        
      this.totalfriends = this.friendlist.length;

      
    })
    
  }

}
