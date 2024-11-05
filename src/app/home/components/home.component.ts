import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  listData: any = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.dataService.getDataList().subscribe({
      next: (data: any) => {
        this.listData = data;
      },
      error: (err) => {
        console.log('Error in fetching List data ::', err);
      },
    });
  }
}
