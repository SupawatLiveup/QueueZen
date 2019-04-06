import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityQueueListComponent } from './priority-queue-list.component';

describe('PriorityQueueListComponent', () => {
  let component: PriorityQueueListComponent;
  let fixture: ComponentFixture<PriorityQueueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorityQueueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityQueueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
