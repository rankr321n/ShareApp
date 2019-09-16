import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthorizeService } from "./auth/authorize.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "ShareApp";
  constructor(private router: Router, private auth: AuthorizeService) {}
  ngOnInit(): void {}
}
