import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallingService } from 'src/app/services/apicalling.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private apiCallingService: ApicallingService, private router: Router) { }

  ngOnInit(): void {
    if (this.apiCallingService.loggedInStatus == false) {
      Swal.fire({
        icon: 'error',
        title: 'เกิดข้อผิดพลาด',
        text: 'กรุณาเข้าสู่ระบบก่อนการใช้งานอีกครั้ง'
      });
    }
  }

  logout(): void {
    this.apiCallingService.deleteLoggedIn();
    this.router.navigate(['/login']);
  }

}
