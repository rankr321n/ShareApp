import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, config } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Router, ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: "root"
})
export class AuthorizeService {
  returnUrl:string
 currentUser:any
 currentUserChanged=new BehaviorSubject<any>(null)
  constructor(private http: HttpClient,private router:Router, private route: ActivatedRoute,) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl']
  }
  url = "http://localhost:3000";
  role:any

  authenticate(loginData: any) {
    this.http
      .post<{ logintoken: any,role:any }>(this.url + "/login", loginData).subscribe(res=>{
        
        this.currentUser=res;
        this.currentUserChanged.next(this.currentUser)
        localStorage.setItem("access_token",res.logintoken)
        localStorage.setItem("role",res.role)
        if(res){
          this.role=res.role
        }
        if(res.role=="user"){
this.router.navigate(['/user'])
        }
        else if(res.role=="admin"){
        this.router.navigate(['/admin'])}
      })
      }
  
  logout() {
    localStorage.clear()
  }

  getToken(){
  
  return localStorage.getItem("access_token")
  
}

  public get loggedIn(): boolean {
    return localStorage.getItem("access_token") !== null;
  }

  getCurrentUser():Observable<any>{
    return this.http.get(this.url+"/dashboard")
    }

//if user is already loggedIn

autologin(){
const role=localStorage.getItem("role")
const token=localStorage.getItem("access_token")

if(role=='admin'&&token){
this.router.navigate([this.returnUrl])  
}
if(role=='user' && token){
  this.router.navigate([this.returnUrl])
}

}





emailVerification(token:any):Observable<any>{
  // console.log(token);
  
return this.http.get(this.url+"/verify/"+token)
}

}
