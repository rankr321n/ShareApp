import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   url="http://localhost:3000"

  constructor(private http:HttpClient) { }

  getTerms(): Observable<any> {
    return this.http.get(this.url + "/termsandconditions");
  }
}
