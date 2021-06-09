import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPageHeaderComponent } from './config-page-header.component';

describe('ConfigPageHeaderComponent', () => {
  let component: ConfigPageHeaderComponent;
  let fixture: ComponentFixture<ConfigPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigPageHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
