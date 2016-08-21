import { Routes, RouterModule } from '@angular/router'
import { AdministratorComponent } from './administrator.component';

const administratorRoutes: Routes = [
  {
    path: 'administrator',
    component: AdministratorComponent,
    children: []
  }
];

export const administratorRouting = RouterModule.forChild(administratorRoutes);