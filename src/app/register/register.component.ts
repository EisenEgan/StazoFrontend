import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { ValidateUsername } from '../_validators/username';
import { ValidateEmail } from '../_validators/email';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createRegisterForm()
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      email: ['',
        [Validators.required, Validators.email],
        ValidateEmail.createValidator(this.authService)
      ],
      username: ['',
        [Validators.required, Validators.minLength(4)],
        ValidateUsername.createValidator(this.authService)
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(10)]
      ],
      confirmPassword: ['', Validators.required],
      agreement: [false]
    }, {validator: this.passwordMatchValidator})
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : {'mismatch': true}
  }

  register() {
    if (this.registerForm.valid) {
      // this.user = Object.assign({}, this.registerForm.value)
      this.authService.register(this.registerForm.value).subscribe(() => {
        // this.alertify.success('Registration successful')
      }, error => {
        console.log(error)
        // this.alertify.error(error)
      }, () => {
        this.authService.login(this.registerForm.value).subscribe(() => {
          this.router.navigate(['/'])
        })
      })
    }
    console.log(this.registerForm.value)
  }


}
