import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePicturesFormComponent } from './profile-pictures-form.component';

describe('ProfilePicturesFormComponent', () => {
  let component: ProfilePicturesFormComponent;
  let fixture: ComponentFixture<ProfilePicturesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePicturesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePicturesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
