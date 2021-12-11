import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent implements OnInit {
  appName: string;
  pageName: string;

  @ViewChild('maincontent', { static: false }) mainContent: any;

  dtSupporter3Options: DataTables.Settings = {};
  dtSupporter2Options: DataTables.Settings = {};
  dtSupporter1Options: DataTables.Settings = {};
  dtOperatorOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit(): void {
    this.appName = environment.appName;
    this.pageName = "จัดการข้อมูลผู้ใช้";
  }

}
