import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginRequestModel } from "../models/login/login-request.model";
import { LoginResponseModel } from "../models/login/login-response.model";
import "rxjs/Rx";

@Injectable()
export class SecurityService {
  constructor(private http: HttpClient) {}

  validateUser(loginModel: LoginRequestModel) {
    return this.http
      .post("http://www.localapi.com/api/security/login", {
        username: loginModel.username,
        password: loginModel.password
      })
      .map((response: LoginResponseModel) => {
        return response;
      });
  }

  saveAuthenticatedUser(authData: LoginResponseModel) {
    const expirationDateTime = new Date(
      new Date().getTime() + authData.expiresIn * 1000
    );

    window.localStorage.setItem("token", authData.token);
    window.localStorage.setItem("userId", authData.userId.toString());
    window.localStorage.setItem(
      "expirationDateTime",
      expirationDateTime.toString()
    );
  }

  isUserAuthenticated() {
    const userId: string = window.localStorage.getItem("userId");
    const token: string = window.localStorage.getItem("token");
    return userId != null && token != null;
  }
}
