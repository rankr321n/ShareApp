import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { AuthorizeService } from 'src/app/auth/authorize.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
users:any=[]
image:any
  constructor(private user:AdminService,private auth:AuthorizeService) { }

  ngOnInit() {   this.user.manageUsers().subscribe(data => {
    this.users = data;
    
if(data.message){
this.auth.logout()

}
});
  }

}
