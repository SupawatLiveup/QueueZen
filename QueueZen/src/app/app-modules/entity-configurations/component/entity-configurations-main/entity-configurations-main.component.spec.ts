import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityConfigurationsMainComponent } from './entity-configurations-main.component';

describe('EntityConfigurationsMainComponent', () => {
  let component: EntityConfigurationsMainComponent;
  let fixture: ComponentFixture<EntityConfigurationsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityConfigurationsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityConfigurationsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
