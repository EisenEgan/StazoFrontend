import { Injectable } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
import { AuthService } from '../_services/auth.service'
 
@Injectable()
export class ValidateEmail {
    static createValidator(authService: AuthService) {
        return (control: AbstractControl) => {
            return authService.validateEmail(control.value).map(res => {
                console.log(res)
                return !res.email_taken ? null : { emailTaken: true };
            });
        };
    }
}