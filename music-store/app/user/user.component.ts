import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'user',
  template: `
    <h1>User</h1>
    <router-outlet></router-outlet>
  `
})
export class UserComponent {
}
