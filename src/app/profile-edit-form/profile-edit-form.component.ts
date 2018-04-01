import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ProfileService } from '../_services/profile.service';

@Component({
  selector: 'app-profile-edit-form',
  templateUrl: './profile-edit-form.component.html',
  styleUrls: ['./profile-edit-form.component.css']
})
export class ProfileEditFormComponent implements OnInit {

  profileEditForm: FormGroup
  passwordEditForm: FormGroup

  place: string
  city: string
  state: string
  searched: boolean
  
  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.createProfileEditForm()
    this.createPasswordEditForm()
  }

  createProfileEditForm() {
    this.profileEditForm = this.fb.group({
      firstName: ['',
        [Validators.required, Validators.minLength(2)]
      ],
      lastName: ['',
        [Validators.required, Validators.minLength(2)]
      ],
      zip: ['',
        [
          Validators.required, 
          Validators.pattern(/^\d{5}$/)
        ],
        this.zipValidator.bind(this)
        // Validators.compose(
        //   [
        //     Validators.required, 
        //     Validators.pattern(/^\d{5}$/)
        //   ]
        // )
      ],
      email: ['', [Validators.required, Validators.email]]
    }, {validator: this.passwordMatchValidator})
  }

  createPasswordEditForm() {
    this.passwordEditForm = this.fb.group({
      oldPassword: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(10)]
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(10)]
      ],
      confirmPassword: ['', Validators.required]
    }, {validator: this.passwordMatchValidator})
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : {'mismatch': true}
  }

  zipValidator(control: AbstractControl) {
    return this.profileService.getLocation(control.value).map(res => {
      if (res) {
        this.city = res.places[0]["place name"]
        this.state = res.places[0]["state abbreviation"]   
        this.place = this.city + ", " + this.state
      } else {
        this.place = undefined
      }
      return res ? null : { 'invalidZip' : true };
    })
  }

  editProfile() {
    if (this.profileEditForm.valid) {

    }
    console.log(this.profileEditForm.value)
  }

  changePassword() {

  }

  checkZip() {
    if (this.profileEditForm.get('zip').valid) {
      // this.profileService
      //   .getLocation(this.profileEditForm.get('zip').value)
      //   .subscribe(response => {
      //     this.searched = false
      //     var city = response.places[0]["place name"]
      //     var state = response.places[0]["state abbreviation"]   
      //     this.place = city + ", " + state   
      //   }, (error) => {
      //     this.place = undefined
      //     this.searched = true
      //   })
    } else {
      this.place = undefined
      this.searched = false
    }
  }
  
}
