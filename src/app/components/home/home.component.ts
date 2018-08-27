import { Component, OnInit } from "@angular/core";
import { SecurityService } from "../../services/security.service";
import { Router } from "../../../../node_modules/@angular/router";
import { MenuItems } from "../../static/menu-items";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public isHidden = false;
  public suggestionItems: any[];

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

  onSearchInput(event) {
    const searchText = event.target.value;

    this.suggestionItems = [];
    if (!searchText) {
      return;
    }

    for (const menuItem of MenuItems) {
      for (const item of menuItem.items) {
        if (item.text.toLowerCase().startsWith(searchText.toLowerCase())) {
          this.suggestionItems.push(item);
        }
      }
    }
  }

  onSuggestionItemClicked(suggestionItem) {
    console.log(suggestionItem);
  }

  onclick(event) {
    this.securityService.callApi();
  }

  onBlurSearchInput() {
    this.suggestionItems = [];
  }
}

export class SuggestionItem {
  constructor(public text: string) {}
}
