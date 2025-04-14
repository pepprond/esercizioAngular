import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardComponent } from './contact-card.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ContactCardComponent],
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule],
  exports: [ContactCardComponent],
})
export class ContactCardModule {}
