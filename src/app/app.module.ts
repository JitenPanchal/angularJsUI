import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./components/login/login.component";
import { SecurityService } from "./services/security.service";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { AuthGuard } from "./services/auth-guard.service";
import { getBaseUrl } from "./helpers/app-data";
import { ApiInterceptor } from "./helpers/api-intercepter";


const appRoutes: Routes = [
  { path: "", component: LoginComponent},
  { path: "mytest", component: LoginComponent},
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    SecurityService,
    AuthGuard,
    { provide: "BASE_URL", useFactory: getBaseUrl },
    { provide: "HTTP_INTERCEPTORS", useClass: ApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
