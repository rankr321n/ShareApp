import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-user-header",
  templateUrl: "./user-header.component.html",
  styleUrls: ["./user-header.component.css"]
})
export class UserHeaderComponent implements OnInit {
  constructor(private api: UserService) {}
  userdata = "";
  ngOnInit() {}
}
