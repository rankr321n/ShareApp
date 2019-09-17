import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AdminService } from "../admin.service";
import { typeWithParameters } from "@angular/compiler/src/render3/util";

@Component({
  selector: "app-terms",
  templateUrl: "./terms.component.html",
  styleUrls: ["./terms.component.css"]
})
export class TermsComponent implements OnInit {
  updateForm: FormGroup;
  terms: any = {};
  aboutus: any = {};
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private admin: AdminService
  ) {}

  ngOnInit() {
    this.updateForm = this.fb.group({
      terms: ["", Validators.required],
      aboutus: [" ", Validators.required]
    });
    this.admin.getTerms().subscribe(data => {
      // console.log(data);
      for (let item of data) {
        this.terms = item.terms;
        this.aboutus = item.aboutus;
      }
    });
  }

  update() {
    this.admin.updateTerms(this.updateForm.value).subscribe();
  }
}
