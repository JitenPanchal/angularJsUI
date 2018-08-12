import { Component, OnInit, ViewChild } from '@angular/core';
import { SecurityService } from '../../services/security.service';
import { Response } from '@angular/http';
import { NgForm } from '@angular/forms';
import { LoginRequestModel } from '../../models/login/loginRequest.model';
import { LoginResponseModel } from '../../models/login/loginResponse.model';
import { Observable } from 'rxjs/Rx';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginRequestModel: LoginRequestModel;
  public loginResponseModel: LoginResponseModel;
  @ViewChild('loginForm') loginForm: NgForm;

  constructor(private securityService: SecurityService) {
    this.loginRequestModel = new LoginRequestModel();
    this.loginResponseModel = new LoginResponseModel();
  }

  ngOnInit() {
  }

  onSubmit(event) {
    console.log(event.currentTarget.dataset.loadingText);
    const buttonLogin: any = $(event.currentTarget);
    const loadingText: string = event.currentTarget.dataset.loadingText;

    if (buttonLogin.html() !== loadingText) {
      buttonLogin.data('original-text', buttonLogin.html());
      buttonLogin.html(loadingText);
    }

    this.securityService.validateUser(this.loginRequestModel).subscribe((response) => {
      buttonLogin.html(buttonLogin.data('original-text'));
      this.loginResponseModel = response;
    });
  }
}
