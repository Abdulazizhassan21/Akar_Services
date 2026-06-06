  import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";


export let PasswordMisMatch = (control:AbstractControl):ValidationErrors | null => {
  let password = control.value.password ;
let repassword = control.value.repassword ;


if(password == repassword && password && repassword)

return null;
else{
  return {PasswordMisMatch:true};
}
}



