import { Routes, RouterModule } from '@angular/router'
import { ContactListComponent, ContactDetailComponent, AddContactComponent } from './contacts/contacts'

const appRoutes: Routes = [
  {
    path: 'contacts',
    component: ContactListComponent
  },
  {
    path: 'contacts/add',
    component: AddContactComponent
  },
  {
    path: 'contacts/:id',
    component: ContactDetailComponent
  },
  {
    path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(appRoutes);