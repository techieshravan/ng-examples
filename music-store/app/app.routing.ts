import { Routes, RouterModule } from '@angular/router'

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/visitor',
    pathMatch: 'full'
  }
];

export const appRoutingProviders: any[] = [];

export const appRouting = RouterModule.forRoot(appRoutes);