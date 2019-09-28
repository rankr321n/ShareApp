import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import{AuthorizeService} from './authorize.service'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { error } from 'util';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private injector: Injector, private router:Router) { }


  intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
    const authService = this.injector.get(AuthorizeService);

    let tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    });
    return next.handle(tokenizedRequest)
    
}
}

