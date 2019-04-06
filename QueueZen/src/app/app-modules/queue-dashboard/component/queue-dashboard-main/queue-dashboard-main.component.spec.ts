import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueDashboardMainComponent } from './queue-dashboard-main.component';

describe('QueueDashboardMainComponent', () => {
  let component: QueueDashboardMainComponent;
  let fixture: ComponentFixture<QueueDashboardMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueDashboardMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueDashboardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
