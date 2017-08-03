import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenspacesListComponent } from './greenspaces-list.component';

describe('GreenspacesListComponent', () => {
  let component: GreenspacesListComponent;
  let fixture: ComponentFixture<GreenspacesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenspacesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenspacesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
