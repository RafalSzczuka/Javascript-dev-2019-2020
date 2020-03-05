import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactRegistrationComponent } from './react-registration.component';

describe('ReactRegistrationComponent', () => {
  let component: ReactRegistrationComponent;
  let fixture: ComponentFixture<ReactRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
