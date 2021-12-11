import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CaseDashboardComponent } from './case-dashboard/case-dashboard.component';
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './main/edit-profile/edit-profile.component';
import { MainComponent } from './main/main.component';
import { OrganizationManagementComponent } from './main/organization-management/organization-management.component';
import { UserDashboardComponent } from './main/user-dashboard/user-dashboard.component';
import { UsersManagementComponent } from './main/users-management/users-management.component';
import { ApicallingService } from './services/apicalling.service';
import { AuthGuard } from './services/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: CaseDashboardComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: 'user-dashboard', component: UserDashboardComponent },
      { path: 'users-management', component: UsersManagementComponent },
      { path: 'organization-management', component: OrganizationManagementComponent },
      { path: 'edit-profile', component: EditProfileComponent },
      { path: '', redirectTo: 'user-dashboard', pathMatch: 'full' },
    ],
    canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    ApicallingService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent, AuthGuard]
})
export class AppRoutingModule { }
