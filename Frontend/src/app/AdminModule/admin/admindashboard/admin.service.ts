import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  user: any;
  url = "http://localhost:3000/terms";
  constructor(private http: HttpClient) {}

  updateTerms(data: any): Observable<any> {
    console.log(data);

    return this.http.post(this.url, data);
  }
}
