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
 
  constructor(private api:AuthorizeService) { }

  ngOnInit() {
    this.api.getCurrentUser().subscribe(res=>{
      this.loggedInUser = res;
      
      this.friendlist = this.loggedInUser["friends"].slice();
         
      this.totalfriends = this.friendlist.length;

      
    })
    
  }

}
