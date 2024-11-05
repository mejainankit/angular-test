import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  listData: any = [];

  constructor(private dataService: DataService, private router: Router) {
    this.getData();
  }

  getData() {
    this.dataService.getDataList().subscribe({
      next: (data: any) => {
        this.listData = data;
        this.dataService.setDataList(data);
      },
      error: (err) => {
        this.listData = [];
      },
    });
  }
}
