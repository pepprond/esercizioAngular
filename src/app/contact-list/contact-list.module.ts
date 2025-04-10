import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list.component';
import { ContactCardModule } from '../contact-card/contact-card.module';

@NgModule({
  declarations: [ContactListComponent],
  imports: [CommonModule, ContactCardModule],
})
export class ContactListModule {}
