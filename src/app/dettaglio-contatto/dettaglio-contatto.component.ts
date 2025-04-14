import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-dettaglio-contatto',
  templateUrl: './dettaglio-contatto.component.html',
  styleUrls: ['./dettaglio-contatto.component.css'],
})
export class DettaglioContattoComponent implements OnInit {
  contatto: Contact = {
    id: 0,
    name: '',
    email: '',
    address: '',
  };
  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    let id = this.activatedRouter.snapshot.paramMap.get('id');
    if (id) {
      this.contactService.getDettaglio(id).subscribe((contatto) => {
        if (contatto) {
          this.contatto = contatto;
        }
      });
    }
  }
}
