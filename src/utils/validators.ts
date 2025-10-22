import {AbstractControl} from "@angular/forms";

export class EqualPasswordValidator {
   static validatorPassword(firstControl:string,secondControl:string){
    return (control:AbstractControl)=>{
      const firstValue = control.get(firstControl)?.value;
      const secondValue = control.get(secondControl)?.value;

      if (firstValue !== secondValue){
        return {notEqual:true};
      }
      return null;
    }
   }
}

export class SearchValidator{
  static validatorPassword(control:AbstractControl){
    const value = control.value;
    if(value == null){
      return null;
    }
    const specialChart = /[@./*+!?¿_]/;
    const hasSpecialChart = specialChart.test(value);
    if(hasSpecialChart){
      return null;
    }
    return {notSpecialChart:true};
  }
}
/*export class SearchValidator{
  static validatorPassword(first:string){
    return (control:AbstractControl)=>{
      const firstValue = control.get(first)?.value;
      if(firstValue == null){
        return null
      }
      const specialChart = /[@./*+!?¿_]/;
      const hasSpecial = specialChart.test(firstValue);
      if(hasSpecial){
        return null;
      }
      return {notSpecial:true};
    }
  }
}*/

/*const value = control.value;
 if (value == null){
   return null;
 }
 if (value.includes(' ')){
   return {hasSpace:true};
 }
 return null;*/
