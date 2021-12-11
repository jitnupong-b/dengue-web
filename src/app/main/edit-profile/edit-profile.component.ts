import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallingService } from 'src/app/services/apicalling.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  appName: string;
  pageName: string;

  organizations: any;
  dataSource: any;
  id: any;
  FirstName: any;
  LastName: any;
  Gender: any;
  password_old: any;
  password_new: any;
  Email: any;
  number: any;
  ID_organization: any;
  organization: any;
  agency: any;

  formGroup!: FormGroup;
  status1: boolean = false;
  status2: boolean = false;
  status3: boolean = false;
  status4: boolean = false;

  constructor(private apiCallingService: ApicallingService, private router: Router) {
    console.log(this.getID());
    this.apiCallingService.usersselect(this.getID()).subscribe((data: any) => {
      console.log(data);
      this.id = data.data.id;
      this.FirstName = data.data.firstName;
      this.LastName = data.data.lastName;
      this.Gender = data.data.gender;
      this.Email = data.data.email;
      this.number = data.data.number;
      this.agency = data.data.agency;
      this.organization = data.data.organization;
      this.ID_organization = data.data.ID_organization;
    });

  }

  ngOnInit(): void {
    this.appName = environment.appName;
    this.pageName = 'แก้ไขข้อมูลส่วนบุคคล';

    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      id: new FormControl(
        { value: 'n/a', disabled: true },
        Validators.required
      ),
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password_old: new FormControl(''),
      password_new: new FormControl(''),
      number: new FormControl('', Validators.required),
      organization: new FormControl(
        { value: 'n/a', disabled: true },
        Validators.required
      ),
      agency: new FormControl('', Validators.required),
    });
  }

  getID() {
    return localStorage.getItem('ID');
  }
}
