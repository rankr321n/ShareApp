import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from "@angular/common/http";
import{AuthorizeService} from './authorize.service'
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }


  intercept(req, next) {
    const authService = this.injector.get(AuthorizeService);
   
    let tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    });
    return next.handle(tokenizedRequest);
  }
}
