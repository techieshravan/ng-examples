import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { administratorRouting } from './administrator.routing';

import { AdministratorComponent } from './administrator.component';

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    administratorRouting
  ],
  declarations: [AdministratorComponent],
  providers: []
})
export class AdministratorModule {
}
