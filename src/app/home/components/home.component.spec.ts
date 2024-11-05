import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterOutlet } from '@angular/router';
import { of, throwError } from 'rxjs';
import { DataService } from '../../services/data.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        HttpClientModule,
        RouterOutlet,
        MatCardModule,
        MatProgressSpinnerModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Behaves correctly based on getDataList API call', () => {
    it('should display if api call success', () => {
      const restService = TestBed.inject(DataService);
      const data = [
        {
          userId: 1,
          id: 1,
          title: 'Introduction to Artificial Intelligence',
          body: 'Learn the basics of Artificial Intelligence and its applications in various industries.',
          link: 'https://example.com/article1',
          comment_count: 8,
        },
        {
          userId: 2,
          id: 2,
          title: 'Web Development with React',
          body: 'Build modern web applications using React.js and explore its powerful features.',
          link: 'https://example.com/article2',
          comment_count: 12,
        },
      ];
      spyOn(restService, 'getDataList').and.returnValue(of(data));

      component.getData();
      expect(component.listData.length).toBeTruthy();
    });

    it('should display if api call error', () => {
      const restService = TestBed.inject(DataService);
      const error = new HttpErrorResponse({
        error: { code: 400, message: `Error` },
        status: 400,
        statusText: 'Bad Request',
      });
      spyOn(restService, 'getDataList').and.returnValue(throwError(error));
      component.getData();
      expect(component.listData.length).toBeFalsy();
    });
  });
});
