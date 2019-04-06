import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnserviceQueueListComponent } from './onservice-queue-list.component';

describe('OnserviceQueueListComponent', () => {
  let component: OnserviceQueueListComponent;
  let fixture: ComponentFixture<OnserviceQueueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnserviceQueueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnserviceQueueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
