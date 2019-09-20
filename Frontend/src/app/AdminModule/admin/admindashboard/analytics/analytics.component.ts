import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
users=[]
  constructor(private admin:AdminService) { }

  ngOnInit() {
    this.admin.manageUsers().subscribe(data => {
      this.users = data;



    });
  }

}
