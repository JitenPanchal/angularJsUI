import { Component, OnInit } from "@angular/core";
import { SecurityService } from "../../services/security.service";
import { Router } from "../../../../node_modules/@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public isHidden = false;

  constructor(
    private securityService: SecurityService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSideBarButtonClick() {
    this.isHidden = !this.isHidden;
  }

  onLogoutClick() {
    this.securityService.clearAuthenticatedUser();
    this.router.navigate([""]);
  }
}
