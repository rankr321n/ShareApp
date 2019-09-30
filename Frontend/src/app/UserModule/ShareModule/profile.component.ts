import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { DragdropService } from './dragdrop.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private view:UserService,private multi:DragdropService) { }
id:any
imagePath:any
video:any={}
  ngOnInit() {
    this.view.ViewUserProfile(this.id).subscribe(data=>{
      this.imagePath=data.image
    
    });

this.multi.getUserFiles().subscribe(data=>{
  // console.log(data.users[0].files[0]);
  this.video=data.users[0].files[0]
})



  }

}
