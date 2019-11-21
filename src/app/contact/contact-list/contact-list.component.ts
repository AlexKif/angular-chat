import { Component, Input, EventEmitter, Output } from '@angular/core';
import {Contact} from '../../model/contact';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  selectedContact: Contact;
  @Input() contacts;
  @Output() select = new EventEmitter();

  selectContact(contact) {
    this.selectedContact = contact;
    this.select.next(contact);
  }

  isSelected(contact): boolean {
    return this.selectedContact == contact;
  }
}
