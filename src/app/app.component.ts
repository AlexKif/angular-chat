import {Component} from '@angular/core';
import {Contact} from './model/contact';
import {ChatComponent} from "./chat/chat.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  selectedContact: Contact;

  contacts: Contact[] = [
    { name: 'Hodor' },
    { name: 'Imp' },
    { name: 'Dany' }
  ];

  hodor = new ChatComponent;
  imp = new ChatComponent;
  dany = new ChatComponent;

  bots: Array<object> = [this.hodor, this.imp, this.dany];




  printChat() {
    this.bots.forEach( b => {

    })
  }

  selectContact(contact) {
    this.selectedContact = contact;
  }
}
