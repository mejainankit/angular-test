import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../../../services/data.service';
import { ItemCardComponent } from './item-card.component';

describe('ItemCardComponent', () => {
  let component: ItemCardComponent;
  let fixture: ComponentFixture<ItemCardComponent>;

  beforeEach(async () => {
    const paramsData = new Map();
    paramsData.set('id', 1);
    const paramsSubject = new BehaviorSubject(paramsData);

    const fakeActivatedRoute = {
      snapshot: { data: {} },
      paramMap: paramsSubject,
    };

    await TestBed.configureTestingModule({
      declarations: [ItemCardComponent],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        {
          provide: DataService,
          useValue: {
            dataList: [
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
            ],
          },
        },
        HttpClient,
        HttpHandler,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
