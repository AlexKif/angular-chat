import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  @Output() message = new EventEmitter();

  messageText: string;

  addMessage() {
    this.message.emit(this.messageText);
    this.messageText = '';
  }
}
