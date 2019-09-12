import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthorizeService } from "../authorize.service";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  error: string;
  constructor(
    private fb: FormBuilder,
    private auth: AuthorizeService,
    private router: Router
  ) {}

  ngOnInit() {
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
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.auth
      .authenticate(
        this.loginForm.value.username,
        this.loginForm.value.password
      )
      .pipe(first())
      .subscribe(
        result => this.router.navigate(["forgot"]),
        err => (this.error = "Could not authenticate")
      );
  }
}
