import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  user: any;
  url = "http://localhost:3000";
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
}
