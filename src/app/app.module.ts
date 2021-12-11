import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UsersManagementComponent } from './main/users-management/users-management.component';
import { OrganizationManagementComponent } from './main/organization-management/organization-management.component';
import { UserDashboardComponent } from './main/user-dashboard/user-dashboard.component';
import { EditProfileComponent } from './main/edit-profile/edit-profile.component';
import { LogoutComponent } from './logout/logout.component';
import { CaseDashboardComponent } from './case-dashboard/case-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    UsersManagementComponent,
    OrganizationManagementComponent,
    UserDashboardComponent,
    EditProfileComponent,
    LogoutComponent,
    CaseDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
