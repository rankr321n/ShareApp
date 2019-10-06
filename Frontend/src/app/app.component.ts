import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthorizeService } from "./auth/authorize.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "ShareApp";
  returnUrl:string
  constructor(private router: Router, private auth: AuthorizeService, private route: ActivatedRoute)
   {
     }

   
  ngOnInit(){
  
// 
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
}
}
