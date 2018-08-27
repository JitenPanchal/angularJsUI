import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import "rxjs/add/operator/catch";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const baseUrl = document.getElementsByTagName("base")[0].href;
    const apiReq = req.clone({ url: `${baseUrl}${req.url}` });
    return next
      .handle(apiReq)
      .do((event: HttpEvent<any>) => {})
      .catch(err => {
        if (err instanceof HttpErrorResponse) {
          if (!err.ok && err.url.indexOf("?ReturnUrl=") !== -1) {
            alert(
              "Your session has ended. You will be redirected to login page."
            );
            this.router.navigate([""]);
          }
        } else {
          return Observable.throw(err);
        }
      });
  }
}
