import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchManagementMainComponent } from './branch-management-main.component';

describe('BranchManagementMainComponent', () => {
  let component: BranchManagementMainComponent;
  let fixture: ComponentFixture<BranchManagementMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchManagementMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchManagementMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
