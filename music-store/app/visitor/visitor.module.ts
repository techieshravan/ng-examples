import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { visitorRouting } from './visitor.routing';

import { VisitorComponent } from './visitor.component';
import { ChartToppersComponent } from './chart-toppers/chart-toppers.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchComponent } from './search/search.component';
import { VoteComponent } from './vote/vote.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    visitorRouting
  ],
  declarations: [
    VisitorComponent,
    ChartToppersComponent,
    HelpComponent,
    HomeComponent,
    LoginComponent,
    NewReleasesComponent,
    RegistrationComponent,
    SearchComponent,
    VoteComponent
  ],
  providers: []
})
export class VisitorModule {
}
