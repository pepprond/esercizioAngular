import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DettaglioContattoComponent } from './dettaglio-contatto.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [DettaglioContattoComponent],
  imports: [CommonModule, RouterModule, MatCardModule, MatDividerModule],
})
export class DettaglioContattoModule {}
