import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../service/annonce.service';

@Component({
  selector: 'app-list-annonces',
  templateUrl: './list-annonces.component.html',
  styleUrls: ['./list-annonces.component.css'],
})
export class ListAnnoncesComponent implements OnInit {
  list: any;
  constructor(private s: AnnonceService) {}

  ngOnInit(): void {
    this.s.fetchAnnonce().subscribe((response) => {
      this.list = response;
    });
  }

  getColor(item: any) {
    if (item.etat == 'confirmé') return 'green';
    else if (item.etat == 'en attente') return 'orange';
    else return 'white';
  }
}
