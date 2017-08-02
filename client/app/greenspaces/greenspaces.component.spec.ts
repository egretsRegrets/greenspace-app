import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenspacesComponent } from './greenspaces.component';

describe('GreenspacesComponent', () => {
  let component: GreenspacesComponent;
  let fixture: ComponentFixture<GreenspacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenspacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenspacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
