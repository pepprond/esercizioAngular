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
  contactListfiltrata: Contact[] = [];
  constructor(private contactService: ContactService) {}
  ngOnInit(): void {
    this.contactService.getContacts().subscribe((dataList) => {
      this.contactList = dataList;
      this.contactListfiltrata = dataList;
    });
  }

  cercaContatto(event: Event): void {
    let searchTerm = (event.target as HTMLInputElement).value;
    searchTerm = searchTerm.toLowerCase();
    this.contactListfiltrata = this.contactList.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm)
    );
  }
  deleteContactSelected(contactId: number) {
    this.contactService.deleteContact(contactId).subscribe(() => {
      this.contactList = this.contactList.filter(
        (data) => data.id !== contactId
      );
    });
  }
}
