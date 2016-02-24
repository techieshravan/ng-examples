import { Component } from 'angular2/core';

interface User {
    avatarUrl:string;
    name:string;
}

@Component({
    selector: 'github-dashboard-app',
    templateUrl: 'src/components/app/app.component.html'
})
export class AppComponent {
    profiles = PROFILES;
}

var PROFILES: User[] = [
    {
        avatarUrl:'https://avatars.githubusercontent.com/u/1140768?v=3',
        name: 'Shravan'
    },

    {
        avatarUrl:'https://avatars.githubusercontent.com/u/139426?v=3',
        name: 'Angular'
    }


];

