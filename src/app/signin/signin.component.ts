import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createSigninForm()
  }

  createSigninForm() {
    this.signinForm = this.fb.group({
      emailOrUsername: ['', [Validators.required, Validators.minLength(4)]],
      password: [
        '', 
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)]
      ]
    })
  }

  signIn() {
    if (this.signinForm.valid) {
      this.authService.login(this.signinForm.value).subscribe(() => {
        this.router.navigate([''])
      })
      // this.user = Object.assign({}, this.registerForm.value)
      // this.authService.register(this.user).subscribe(() => {
      //   this.alertify.success('Registration successful')
      // }, error => {
      //   this.alertify.error(error)
      // }, () => {
      //   this.authService.login(this.user).subscribe(() => {
      //     this.router.navigate(['/members'])
      //   })
      // })
    }
    console.log(this.signinForm.value)
  }

}
