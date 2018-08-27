import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { LoginRequestModel } from "../models/login/login-request.model";
import { LoginResponseModel } from "../models/login/login-response.model";
import "rxjs/Rx";
import { Router } from "@angular/router";


@Injectable()
export class SecurityService {
  constructor(private http: HttpClient, @Inject("BASE_URL") private baseUrl: string, private router: Router) {}

  validateUser(loginModel: LoginRequestModel) {
    return this.http
      .post("api/v1/membership/login", {
        username: loginModel.username,
        password: loginModel.password
      })
      .map((response: LoginResponseModel) => {
        return response;
      });
  }

  isUserAuthenticated() {
    return document.cookie && document.cookie.indexOf(".ASPXAUTH") !== -1;
  }

  clearAuthenticatedUser() {
    this.http.post("api/v1/membership/logout", null).subscribe(response => {});
  }

  callApi() {
    console.log(document.cookie);
    this.callApi2();
  }

  callApi2() {
    // this.http
    //   .get("api/v1/articles?pagenumber=1&pagesize=10")
    //   .subscribe(
    //     response => {},
    //     error => {
    //       if (!error.ok && error.url.indexOf("?ReturnUrl=") !== -1) {
    //         alert("Your session has ended. You will be redirected to login page.");
    //         this.router.navigate([""]);
    //       }
    //     }
    //   );
    this.http
      .get("api/v1/articles?pagenumber=1&pagesize=10")
      .subscribe(
        response => {}
      );
    window.localStorage.clear();
  }
}
