import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  friendsChanged = new Subject<number>();
  url = "http://localhost:3000";

  constructor(private http: HttpClient) {}
//Terms and conditions Display
  getTerms(): Observable<any> {
    return this.http.get(this.url + "/termsandconditions");
  }

  getReguser(): Observable<any> {
    return this.http.get(this.url + "/getreguser");
  }



sendFriendRequest(data: any) {
  return this.http.post<any>(this.url+"/sendFriendRequest", data );
}
unFriend(id: any) {
  // console.log(id);
  return this.http.post<any>(this.url+"/unfriend", {
    id: id
  });
}


acceptFriendRequest(email:any,id:any){
  return this.http.post<any>(this.url+"/acceptFriendRequest",email,id)
}






}
