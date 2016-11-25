import { Injectable } from '@angular/core';


export class InputvalidationService {

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Erforderliches Feld',       
            'invalidEmailAddress': 'Keine gültige Email-Adesse',
            'minlength': 'Mindestens 2 Zeichen'
        };
        return config[validatorName];
    }

         
    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }
    
    
     
   

    
    
    
    
}
