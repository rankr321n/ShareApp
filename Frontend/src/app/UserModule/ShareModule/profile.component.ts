import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private view:UserService) { }
id:any
imagePath:any
  ngOnInit() {
    this.view.ViewUserProfile(this.id).subscribe(data=>{
      this.imagePath=data.image
    
    })
  }

}
