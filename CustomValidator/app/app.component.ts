import {Component} from 'angular2/core';
import {Control, ControlGroup} from 'angular2/common';
import {FormBuilder, Validators} from 'angular2/common';
import {CustomValidators} from "./CustomValidators";

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