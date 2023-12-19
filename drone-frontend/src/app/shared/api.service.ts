import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bin } from './types/common';

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

  getBins(droneName: string, headers: any): Bin[] {
    return [
      new Bin('fa34ra', new Date(2023, 12, 25, 1, 2, 3), 0, 0, 1),
      new Bin('fa34ra', new Date(2023, 12, 25, 1, 2, 3), 0, 1, 1),
      new Bin('fa34ra', new Date(2023, 12, 25, 1, 2, 3), 0, 2, 1),
      new Bin('fa34ra', new Date(2023, 12, 25, 1, 2, 3), 0, 3, 1),
      new Bin('fa34ra', new Date(2023, 12, 25, 1, 2, 3), 0, 4, 1),
      new Bin('fa34ra', new Date(2023, 12, 25, 1, 2, 3), 1, 0, 1),
      new Bin('fa34ra', new Date(2023, 12, 25, 1, 2, 3), 1, 1, 1),
      new Bin('fa34ra', new Date(2023, 12, 25, 1, 2, 3), 1, 2, 1),
      new Bin('fa34ra', new Date(2023, 12, 25, 1, 2, 3), 1, 3, 1),
      new Bin('fa34ra', new Date(2023, 12, 25, 1, 2, 3), 1, 4, 1),
      new Bin('fa34ra', new Date(2023, 12, 25, 1, 2, 3), 2, 0, 1),
      new Bin('fa34ra', new Date(2023, 12, 25, 1, 2, 3), 2, 1, 1),
      new Bin('fa34ra', new Date(2023, 12, 25, 1, 2, 3), 2, 2, 1),
      new Bin('fa34ra', new Date(2023, 12, 25, 1, 2, 3), 2, 4, 1),
      new Bin('fa34ra', new Date(2023, 12, 25, 1, 2, 3), 2, 3, 1),
    ];
  }
}
