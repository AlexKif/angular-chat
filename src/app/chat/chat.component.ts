import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../model/contact';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})

export class ChatComponent  {

  @Input() contact: Contact;
  @Input() bots;

  messages: Array<object> = [];

  printMessage(text) {
    this.messages.push({name: this.contact.name, message: text});
  }
}


