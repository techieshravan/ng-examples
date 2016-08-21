import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';


import { AppComponent }  from './app.component';
import { ContactListComponent, ContactDetailComponent, AddContactComponent, ContactsService } from './contacts/contacts'

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, routing],
  declarations: [AppComponent, ContactListComponent, ContactDetailComponent, AddContactComponent],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class ContactsAppModule {
}
