import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationListHeaderComponent } from './notification-list-header.component';

describe('NotificationListHeaderComponent', () => {
  let component: NotificationListHeaderComponent;
  let fixture: ComponentFixture<NotificationListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
