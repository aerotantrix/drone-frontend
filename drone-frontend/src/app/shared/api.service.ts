import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = 'http://192.168.1.110/';

  constructor(private httpClient: HttpClient) {}

  loginUser(username: string, password: string): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'login-user', {
      username: username,
      password: password,
    });
  }

  logoutUser(headers: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'logout-user', headers);
  }

  registerStation(
    stationname: string,
    password: string,
    battery: number,
    headers: any
  ): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'register-drone', {
      stationname: stationname,
      password: password,
      battery: battery,
      ...headers,
    });
  }
}
