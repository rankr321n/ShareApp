import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthorizeService } from '../authorize.service';

@Component({
  selector: "app-verify",
  templateUrl: "./verify.component.html",
  styleUrls: ["./verify.component.css"]
})
export class VerifyComponent implements OnInit {
  usertoken=this.actRoute.snapshot.params["token"];
  constructor(private actRoute: ActivatedRoute,private auth:AuthorizeService) {
  }
message:boolean
  ngOnInit() {
   this.auth.emailVerification(this.usertoken).subscribe(res=>{
    // console.log(res);
    if(res.msg=="The account has been verified. Please log in."||res.msg=="This user has already been verified.")
{
  this.message=!this.message
}
         
   })
    
  }
}
