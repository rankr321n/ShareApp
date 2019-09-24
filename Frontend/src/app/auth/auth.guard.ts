import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
// import { AuthorizeService } from './authorize.service';


@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

let token=localStorage.getItem("access_token")
    if(token){

  return true;
   }
else
    this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
    return false;
}


}
