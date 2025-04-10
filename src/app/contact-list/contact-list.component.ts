import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contactList: Contact[] = [];
  constructor(private contactService: ContactService) {}
  ngOnInit(): void {
    this.contactService.getContacts().subscribe((dataList) => {
      this.contactList = dataList;
    });
  }
  deleteContactSelected(contactId: number) {
    this.contactService.deleteContact(contactId).subscribe(() => {
      this.contactList = this.contactList.filter(
        (data) => data.id !== contactId
      );
    });
  }
}
