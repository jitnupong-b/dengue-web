import { EventEmitter, Injectable, Output } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable({
  providedIn: 'root'
})
export class ApicallingService {
  private apiUrl = environment.apiUrl;
  private userData: any;

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  get isLoggedIn() {
    return JSON.parse(
      localStorage.getItem('loggedIn') || this.loggedInStatus.toString()
    );
  }

  getToken() {
    return localStorage.getItem('token');
  }

  login(data: any): Observable<any> {
    // console.log(this.apiUrl);
    /*this.http.post(`${this.apiUrl}users/login`, data).subscribe((dataa: any) => {
      // console.log(dataa);
      if (dataa.result.status == 1) {
        localStorage.setItem('name', dataa.result.firstName + ' ' + dataa.result.lastName);
        localStorage.setItem('email', dataa.result.email);
        localStorage.setItem('IDOrganization', dataa.result.ID_organization);
        localStorage.setItem('status', dataa.result.status);
        localStorage.setItem('organization', dataa.result.organization);
        localStorage.setItem('agency', dataa.result.agency);
        localStorage.setItem('ID', dataa.result.id);
        localStorage.setItem('token', dataa.token);
        this.getMystatusName();
      }
      this.userData = 
    });*/
    return this.http.post(`${this.apiUrl}users/login`, data);
  }

  getStatus(): Observable<any> {
    return this.http.get(`${this.apiUrl}users/getStatus`);
  }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'true');
    this.getLoggedInName.emit(true);
  }

  deleteLoggedIn() {
    localStorage.clear();
  }

  usersselect(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}users/` + id);
  }
  
}
