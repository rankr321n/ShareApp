import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ShareApp';
constructor(private route:Router){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.autoLogin()
  }
  autoLogin()
  {
    const token=localStorage.getItem("access_token")
    
    
    if(token){
      this.route.navigate(['/admin'])
      // sessionStorage.setItem('access_token',token)
    }
  }
}
