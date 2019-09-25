import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from 'src/app/auth/authorize.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-user-profile',
  templateUrl: './view-user-profile.component.html',
  styleUrls: ['./view-user-profile.component.css']
})
export class ViewUserProfileComponent implements OnInit {
id:any
userdata={}
  constructor(private auth:AuthorizeService,private view:UserService) { }

  ngOnInit() {

    this.auth.getCurrentUser().subscribe(res=>{
      this.id=res._id
            })
this.view.ViewUserProfile(this.id).subscribe(data=>{
  
this.userdata=data
})
  }



}
