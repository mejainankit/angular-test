import { TestBed } from '@angular/core/testing';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set dataList', () => {
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
    service.setDataList(data);
    expect(service.dataList).toBeTruthy();
  });
});
