import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { userRouting } from './user.routing';

import { UserComponent } from './user.component';

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    userRouting
  ],
  declarations: [UserComponent],
  providers: []
})
export class UserModule {
}
