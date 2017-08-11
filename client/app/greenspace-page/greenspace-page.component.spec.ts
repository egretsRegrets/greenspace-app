import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenspacePageComponent } from './greenspace-page.component';

describe('GreenspacePageComponent', () => {
  let component: GreenspacePageComponent;
  let fixture: ComponentFixture<GreenspacePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenspacePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenspacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
