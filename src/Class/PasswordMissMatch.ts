import { AbstractControl, ValidationErrors } from "@angular/forms";


export let PasswordMisMatch = (control:AbstractControl):ValidationErrors | null => {
  let password = control.value.password ;
let repassword = control.value.repassword ;


if(password == repassword && password && repassword)

return null;
else{
  return {PasswordMisMatch:true};
}
}
// retrurn Erorr Or Compelet === null
// Control Is Your Password Or re Password Control
// You Can Change Anything In His Property
// && Password ===  The Password Is Not Empty
// && RePassword ===  The RePassword Is Not Empty
