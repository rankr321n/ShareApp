import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthorizeService } from "../authorize.service";

import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  error: '';
  role: any;
  loading = false;
  returnUrl: string;
 unverified:any

  constructor(
    private fb: FormBuilder,
    private auth: AuthorizeService,
    private router: Router,private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    
this.auth.currentUserChanged.subscribe(user=>{
   
  if(user){
    
    this.role=user.role
  }
  this.role=null
 
  
})

    
    this.loginForm = this.fb.group({
      email: [
        "",
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ]
      ],
      password: ["", [Validators.required, Validators.minLength(8)]],
      role: ["user"]
    });
  }

  onSubmit() {
    this.submitted = true;

    this.auth.authenticate(this.loginForm.value)
          
}
}