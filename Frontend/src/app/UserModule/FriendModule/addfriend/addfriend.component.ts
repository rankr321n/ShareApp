import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { UserService } from "../../user.service";

@Component({
  selector: "app-addfriend",
  templateUrl: "./addfriend.component.html",
  styleUrls: ["./addfriend.component.css"]
})
export class AddfriendComponent implements OnInit {
  users: any;
  constructor(private api: UserService) {}
  usersearch = "";
  ngOnInit() {
    this.api.getReguser().subscribe(res => {
      this.users = res;
    });
  }
}
