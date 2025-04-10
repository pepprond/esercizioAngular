import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css'],
})
export class ContactCardComponent {
  @Input()
  contact: Contact = {
    id: 0,
    name: '',
    email: '',
    address: '',
  };
  @Output() delete = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.contact.id);
  }
}
