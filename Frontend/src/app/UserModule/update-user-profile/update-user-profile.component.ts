import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { AuthorizeService } from 'src/app/auth/authorize.service';

@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styleUrls: ['./update-user-profile.component.css']
})
export class UpdateUserProfileComponent implements OnInit {
updateForm:FormGroup;
defaultUserdata={}
public imagePath
upload:any
files:any
  imgURL: any;
  public message: string;
  id:any
  constructor(private fb:FormBuilder ,private auth: AuthorizeService,private userdetail:UserService) { }
  
  ngOnInit() {
    
    // this.auth.getCurrentUser().subscribe(res=>{
    //   this.id=res._id
    //   this.imagePath=res.image
    //   console.log(this.imagePath);
    //   // 
    // })
    
  
    this.userdetail.ViewUserProfile(this.id).subscribe(res=>{
    
  this.defaultUserdata=res
  this.imagePath=res.image
  
})


    
    this.updateForm=this.fb.group({
      image:[''],
      username:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      twitter:['',Validators.required],
      linkedin:['',Validators.required],
    })
    
  }
  // preview(files) {
  //   if (files.length === 0)
  //     return;
 
      
  //   var mimeType = files[0].type;
  //   if (mimeType.match(/image\/*/) == null) {
  //     this.message = "Only images are supported.";
     
  //     return;
  //   }
 
  //   var reader = new FileReader();
  //   this.imagePath = files;
  //   reader.readAsDataURL(files[0]); 
  //   reader.onload = (_event) => { 
  //     this.imgURL = reader.result; 
    
  //   }

  // }
  // uploadImage(evt) {
  //       this.files = evt.target.files[0];
        
  // }
  uploadImage(event: any) {
    this.files = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.files=event.target.files[0];
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  
  
updateUserDetails()
{
this.userdetail.UpdateProfile(this.id,this.updateForm.value).subscribe(data=>{
  
})

}
updateImage(){

  let formData = new FormData();
      
  formData.append('file', this.files,this.files.name);
  this.userdetail.updateImage(formData).subscribe(res=>{
       if(res){this.upload=true}
  })
}
}


