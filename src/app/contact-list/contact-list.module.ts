import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list.component';
import { ContactCardModule } from '../contact-card/contact-card.module';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [ContactListComponent],
  imports: [
    MatButtonModule,
    MatInputModule,
    CommonModule,
    ContactCardModule,
    MatToolbarModule,
  ],
})
export class ContactListModule {}
