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
error=false
message=false
  constructor(private actRoute: ActivatedRoute,private auth:AuthorizeService) {
  }

  ngOnInit() {
   this.auth.emailVerification(this.usertoken).subscribe(res=>{
    this.error=res.msg
    if(res){
if(res.msg="We were unable to find a valid token. Your token my have expired."){
this.message=true
}
    }     
   })
    
  }
}
