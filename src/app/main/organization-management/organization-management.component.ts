import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-organization-management',
  templateUrl: './organization-management.component.html',
  styleUrls: ['./organization-management.component.css']
})
export class OrganizationManagementComponent implements OnInit {
  appName: string;
  pageName: string;

  constructor() { }

  ngOnInit(): void {
    this.appName = environment.appName;
    this.pageName = "จัดการหน่วยงาน";
  }

}
