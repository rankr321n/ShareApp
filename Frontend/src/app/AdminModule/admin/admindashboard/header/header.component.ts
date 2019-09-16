import { Component, OnInit } from "@angular/core";
import { AdminService } from "../admin.service";
import { AuthorizeService } from "src/app/auth/authorize.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  username: any;
  constructor(private admin: AdminService, private auth: AuthorizeService) {}

  ngOnInit() {}
}
