import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Contact } from './contact';

@Injectable()
export class ContactsService {

  private contactsServiceUrl = 'http://localhost:4010/contacts';

  constructor (private _http: Http) {
  }

  getContacts () {
    return this._http.get(this.contactsServiceUrl)
      .toPromise()
      .then(response => response.json() as Contact[])
      .catch(this.handleError);
  }

  getContactDetail (contactId: number) {

    let url = `${this.contactsServiceUrl}/${contactId}`;

    return this._http.get(url)
      .toPromise()
      .then(response => response.json() as Contact)
      .catch(this.handleError);
  }

  save (contact: Contact): Promise<Contact> {
    if (contact.id) {
      return this.put(contact);
    }
    return this.post(contact);
  }

  private post (contact: Contact) {

    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this._http
      .post(this.contactsServiceUrl, JSON.stringify(contact), {headers: headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private put (contact: Contact) {

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    let url = `${this.contactsServiceUrl}/${contact.id}`;

    return this._http
      .put(url, JSON.stringify(contact), {headers: headers})
      .toPromise()
      .then(() => contact)
      .catch(this.handleError);
  }

  private handleError (error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
