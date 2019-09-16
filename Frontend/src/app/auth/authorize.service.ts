import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, config } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class AuthorizeService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }
  url = "http://localhost:3000";

  authenticate(loginData: any): Observable<any> {
    return this.http
      .post<{ data: string }>(this.url + "/login", loginData)
      .pipe(
        map(result => {
          for (let item in result) {
            localStorage.setItem("access_token", JSON.stringify(result.data));

            return true;
          }
        })
      );
  }

  logout() {
    localStorage.removeItem("access_token");
  }

  public get loggedIn(): boolean {
    return localStorage.getItem("access_token") !== null;
  }
}
