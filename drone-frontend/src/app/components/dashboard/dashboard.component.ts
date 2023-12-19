import { ColDef } from 'ag-grid-community';
import { Bin } from './../../shared/types/common';
import { AuthService } from 'src/app/shared/auth.service';
import { ApiService } from './../../shared/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  bins: Bin[] = [];
  colDefs: ColDef[] = [];

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.colDefs = [
      { field: 'bin_id', flex: 1 },
      { field: 'row', flex: 1 },
      { field: 'col', flex: 1 },
      { field: 'rack', flex: 1 },
      { field: 'timestamp', flex: 1 },
    ];
    this.bins = this.apiService.getBins('', this.authService.getLoginHeaders());
  }
}
