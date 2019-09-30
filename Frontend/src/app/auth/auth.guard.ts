import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { AuthorizeService } from './authorize.service';
// import { AuthorizeService } from './authorize.service';


@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private authorize:AuthorizeService) {}
role=null
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      this.authorize.currentUserChanged.subscribe(user=>{
        if(user){
          
          this.role=user.role
        }
        
      })
    const token=localStorage.getItem('access_token')
      if(this.role||token){

  return true;
   }
else
    this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
    return false;
}


}
