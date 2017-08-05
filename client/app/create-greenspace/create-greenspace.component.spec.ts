import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGreenspaceComponent } from './create-greenspace.component';

describe('CreateGreenspaceComponent', () => {
  let component: CreateGreenspaceComponent;
  let fixture: ComponentFixture<CreateGreenspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGreenspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGreenspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
