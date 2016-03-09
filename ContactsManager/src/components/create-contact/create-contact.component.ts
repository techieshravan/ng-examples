import {Component} from "angular2/core";
import {ControlGroup, FormBuilder} from "angular2/common";

@Component({
    selector: 'create-contact',
    templateUrl:'/src/components/create-contact/create-contact.html'
})
export class CreateContactComponent {

    private contactForm: ControlGroup;

    constructor(fb: FormBuilder) {

        this.contactForm = fb.group({
            name:[""],
            address:[""],
            city:[""],
            state:[""],
            zip:[""],
            email:[""],
            twitter:[""]
        });
    }
}