import { Injectable } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
import { AuthService } from '../_services/auth.service'
 
@Injectable()
export class ValidateUsername {
    static createValidator(authService: AuthService) {
        return (control: AbstractControl) => {
            return authService.validateUsername(control.value).map(res => {
                return !res.username_taken ? null : { usernameTaken: true };
            });
        };
    }
//   checkUsername(control: FormControl): any {
 
//     this.authProvider.validateUsername(control.value).subscribe((res) => {
//         console.log(res)
//         if(res.ok){
//           resolve(null);
//         }
//       }, (err) => {
//         resolve({'usernameInUse': true});
//       });
//   }
 
}