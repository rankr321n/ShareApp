import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, config } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class AuthorizeService {
  CurrentUserChanged = new BehaviorSubject<String>(null);
  constructor(private http: HttpClient) {
    
  }
  url = "http://localhost:3000";

  authenticate(loginData: any): Observable<any> {
    return this.http
      .post<{ logintoken: any }>(this.url + "/login", loginData)
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

}
