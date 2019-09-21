import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styleUrls: ['./update-user-profile.component.css']
})
export class UpdateUserProfileComponent implements OnInit {
updateForm:FormGroup;
  constructor(private fb:FormBuilder) { }
  fileName = '';
  ngOnInit() {
    
    
    this.updateForm=this.fb.group({
      file:[this.fileName, Validators.required],
      username:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      twitter:['',Validators.required],
      linkedin:['',Validators.required],
    })
    
  }
  onFileChange($event) {
    let file = $event.target.files[0]; // <--- File Object for future use.
    this.updateForm.controls['file'].setValue(file ? file.name : ''); // <-- Set Value for Validation
}

}
