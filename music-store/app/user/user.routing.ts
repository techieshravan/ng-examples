import { Routes, RouterModule } from '@angular/router'

import { UserComponent } from './user.component';

const userRoutes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: []
  }
];

export const userRouting = RouterModule.forChild(userRoutes);