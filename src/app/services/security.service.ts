import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequestModel } from '../models/login/loginRequest.model';
import { LoginResponseModel } from '../models/login/loginResponse.model';
import 'rxjs/Rx';

@Injectable()
export class SecurityService {
  constructor(private http: HttpClient) {}

  validateUser(loginModel: LoginRequestModel) {
    return this.http
      .post('http://www.localapi.com/api/security/login', {
        username: loginModel.username,
        password: loginModel.password
      })
      .map((response: LoginResponseModel) => {
        return response;
      });
  }
}
