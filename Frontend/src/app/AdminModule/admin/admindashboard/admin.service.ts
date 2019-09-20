import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  user: any;
  url = "http://localhost:3000";
  key="04e3f7755fd14f1fa71e2dbb8e0fd4f4"
  constructor(private http: HttpClient) {}

  updateTerms(data: any): Observable<any> {
    return this.http.post(this.url + "/terms", data);
  }
  getTerms(): Observable<any> {
    return this.http.get(this.url + "/termsandconditions");
  }

  manageUsers(): Observable<any> {
    return this.http.get(this.url + "/getuser");
  }
  blockUserAccess(user: any): Observable<any> {
    return this.http.post(this.url + "/block", user);
  }

  unblockUserAccess(user: any): Observable<any> {
    return this.http.post(this.url + "/unblock", user);
  }

  
  getTopHeadLines(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey='+this.key);
  }
  getNewBySource(source){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.key);
  }
  getSources(){
    return this.http.get('https://newsapi.org/v2/sources?apiKey='+this.key);
  }

}

