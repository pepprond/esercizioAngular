import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { DettaglioContattoComponent } from './dettaglio-contatto/dettaglio-contatto.component';

const routes: Routes = [
  { path: '', redirectTo: '/contatti', pathMatch: 'full' },
  { path: 'contatti', component: ContactListComponent },
  { path: 'dettaglio/:id', component: DettaglioContattoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
