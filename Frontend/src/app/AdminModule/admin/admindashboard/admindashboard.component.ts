import { Component, OnInit } from "@angular/core";
import * as $ from 'jquery';
@Component({
  selector: "app-admindashboard",
  templateUrl: "./admindashboard.component.html",
  styleUrls: ["./admindashboard.component.css"]
})
export class AdmindashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $('.btn-expand-collapse').click(function(e) {
      $('.navbar-primary').toggleClass('collapsed');
});
  }
}
