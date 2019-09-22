import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styleUrls: ['./update-user-profile.component.css']
})
export class UpdateUserProfileComponent implements OnInit {
updateForm:FormGroup;
public imagePath;
  imgURL: any;
  public message: string;
  id = this.actRoute.snapshot.params["id"];
  constructor(private fb:FormBuilder ,private actRoute: ActivatedRoute,) { }
  
  ngOnInit() {
    
    
    this.updateForm=this.fb.group({
      image:[ Validators.required],
      username:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      twitter:['',Validators.required],
      linkedin:['',Validators.required],
    })
    
  }
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
}


