import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class AuthorizeService {
  constructor(private http: HttpClient) {}
  url = "http://localhost:3000/";

  authenticate(username: string, password: string): Observable<any> {
    return this.http
      .post<{ token: string }>(this.url + "users", { username, password })
      .pipe(
        map(result => {
          localStorage.setItem("access_token", result.token);
          return true;
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
