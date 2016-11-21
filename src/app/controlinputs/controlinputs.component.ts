import { Component, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import {InputvalidationService} from '../shared/inputvalidation.service';

@Component({
    selector: 'control-messages',
    
    template: '<div *ngIf="errorMessage !== null">{{errorMessage}}</div>'
})

export class ControlinputsComponent {
    controlName: string;
    @Input() control: FormControl;
    constructor() { }
     
    get errorMessage() {
        for (let propertyName in this.control.errors) {
	        // If control has a error
            if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
 		        // Return the appropriate error message from the Validation Service
                return InputvalidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
            }
        }
        
        return null;
    }
}