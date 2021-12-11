import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallingService } from '../services/apicalling.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private apiCallingService: ApicallingService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  loginProcess() {
    if (this.formGroup.valid) {
      this.apiCallingService.login(this.formGroup.value).subscribe((result) => {

        console.log(result);
        console.log(result.success);

        if (result.success == 0 || result.result.status == 0) {
          Swal.fire({
            icon: 'error',
            title: 'เกิดข้อผิดพลาด',
            text: 'ไม่พบผูัใช้ตามอีเมลและรหัสผ่านที่ท่านระบุ กรุณาเข้าสู่ระบบอีกครั้ง'
          });
        } else if (result.success != 0) {
          localStorage.setItem('name', result.result.firstName + ' ' + result.result.lastName);
          localStorage.setItem('email', result.result.email);
          localStorage.setItem('IDOrganization', result.result.ID_organization);
          localStorage.setItem('status', result.result.status);
          localStorage.setItem('organization', result.result.organization);
          localStorage.setItem('agency', result.result.agency);
          localStorage.setItem('ID', result.result.id);
          localStorage.setItem('token', result.token);

          console.log(localStorage.getItem('mystatusname'));

          Swal.fire({
            icon: 'success',
            title: 'ล็อกอินสำเร็จ',
            text: 'กรุณารอ',
            showConfirmButton: false,
            timer: 1500
          });
          this.apiCallingService.setLoggedIn(true);
          this.router.navigate(['main/user-dashboard']);
        }

      });
    }
  }

  getMystatusName() {
    let mystatus = localStorage.getItem('status');
    this.apiCallingService.getStatus().subscribe((data: any) => {
      console.log(data);
      for (let i = 0; i < data.data.length; i++) {
        if (mystatus == data.data[i].permission) {
          localStorage.setItem('mystatusname', data.data[i].status);
        }
      }
    });
  }

}
