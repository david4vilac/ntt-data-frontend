import { AbstractControl, ValidatorFn } from '@angular/forms';


// Validador para la longitud máxima
export function maxLengthNumberValidator(maxLength: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any  } | null => {
    const value = control.value;
    if (value && value.toString().length > maxLength) {
      return { maxLengthExceeded: true, maxLength };
    }
    return null;
  };
}

// Validador para la longitud mínima
export function minLengthNumberValidator(minLength: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any  } | null => {
    const value = control.value;
    if (value && value.toString().length < minLength) {
      return { minLengthNotMet: true,  minLength  };
    }
    return null;
  };
}

