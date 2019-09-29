import { Component, OnInit } from "@angular/core";
import * as $ from 'jquery';
import { AuthorizeService } from 'src/app/auth/authorize.service';
@Component({
  selector: "app-admindashboard",
  templateUrl: "./admindashboard.component.html",
  styleUrls: ["./admindashboard.component.css"]
})
export class AdmindashboardComponent implements OnInit {
  constructor(private auth:AuthorizeService) { }
username:any
  ngOnInit() {
    

    $('.btn-expand-collapse').click(function (e) {
      $('.navbar-primary').toggleClass('collapsed');
    });
  }
}
