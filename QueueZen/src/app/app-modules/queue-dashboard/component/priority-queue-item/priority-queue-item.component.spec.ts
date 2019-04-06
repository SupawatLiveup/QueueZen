import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityQueueItemComponent } from './priority-queue-item.component';

describe('PriorityQueueItemComponent', () => {
  let component: PriorityQueueItemComponent;
  let fixture: ComponentFixture<PriorityQueueItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorityQueueItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityQueueItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
