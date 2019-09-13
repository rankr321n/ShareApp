import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  constructor(private http: HttpClient) {}
  url = "http://localhost:3000";

  registerUser(registrationData: any): Observable<any> {
    return this.http.post(this.url + "/register", registrationData);
  }
}
