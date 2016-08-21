import { Routes, RouterModule } from '@angular/router'

import { VisitorComponent } from './visitor.component';
import { ChartToppersComponent } from './chart-toppers/chart-toppers.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchComponent } from './search/search.component';
import { VoteComponent } from './vote/vote.component';

const visitorRoutes: Routes = [
  {
    path: '',
    redirectTo: '/visitor',
    pathMatch: 'full'
  },
  {
    path: 'visitor/home',
    redirectTo: '/visitor',
    pathMatch: 'full'
  },
  {
    path: 'visitor',
    component: VisitorComponent,
    children: [
      { path: 'chart-toppers', component: ChartToppersComponent },
      { path: 'help', component: HelpComponent },
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent},
      { path: 'new-releases', component: NewReleasesComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'search', component: SearchComponent },
      { path: 'vote', component: VoteComponent }
    ]
  }
];

export const visitorRouting = RouterModule.forChild(visitorRoutes);