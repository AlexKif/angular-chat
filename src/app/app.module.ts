import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import {ChatComponent} from './chat/chat.component';
import {HistoryComponent} from './chat/history/history.component';
import { MessageFormComponent } from './chat/message-form/message-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ChatComponent,
    HistoryComponent,
    MessageFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
