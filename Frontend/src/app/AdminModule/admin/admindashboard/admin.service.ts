import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
user:any
url="http://localhost/3000/users"
  constructor(private http:HttpClient) { }

  fetchLoggedInUser():Observable<any>{
    return this.http.post(this.url,{})
  }

}
