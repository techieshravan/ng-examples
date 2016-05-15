import {Component} from '@angular/core';
import {ControlGroup, FormBuilder, Validators} from '@angular/common';
import {CustomValidators} from './CustomValidators';

@Component({
    selector: 'model-driven-forms-app',
    templateUrl:'/app/app.component.html',
    styles:[`
        .ng-valid {
          border: 1px solid #42A948;
        }
        .ng-invalid {
            border: 1px solid #a94442;
        }
    `]
})
export class AppComponent {

    loginForm: ControlGroup;

    constructor(fromBuilder: FormBuilder){

        this.loginForm = fromBuilder.group({
            email: ['', Validators.compose([Validators.required, CustomValidators.emailValidator])],
            password  : ['', Validators.required]
        });
    }

    onSubmit() {
        if(this.loginForm.valid) {
            console.log(this.loginForm);
        }
    }
}