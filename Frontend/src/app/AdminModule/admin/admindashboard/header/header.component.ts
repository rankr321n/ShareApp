import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
username:any
  constructor(private admin:AdminService) { }

  ngOnInit() {
    this.admin.fetchLoggedInUser().subscribe(data=>{
this.username=data.email
console.log(this.username);

    })
  }

}
