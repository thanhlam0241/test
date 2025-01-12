import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountStatus, Record, User } from '../../../models/models';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'page-table',
  templateUrl: './page-table.component.html',
  styleUrl: './page-table.component.scss',
})
export class PageTableComponent {
  @Input()
  columns: string[] = [];

  @Input()
  dataSource: any[] = [];

  @Output()
  approve = new EventEmitter<User>();

  @Output()
  action = new EventEmitter<Record>();

  getFineToPay(order: Record) {
    return this.apiService.getFine(order);
  }

  constructor(private apiService: ApiService) {}

  getAccountStatus(input: AccountStatus) {
    return AccountStatus[input];
  }
}
