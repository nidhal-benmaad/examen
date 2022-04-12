import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estimation-cout',
  templateUrl: './estimation-cout.component.html',
  styleUrls: ['./estimation-cout.component.css'],
})
export class EstimationCoutComponent implements OnInit {
  cout = 0;
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: any) {
    console.log('form: ', form);
    if (form.posSelect == 'haut') {
      if (form.nbr <= 30) this.cout = 10;
      if (form.nbr > 30) this.cout = 20;
    }
    if (form.posSelect == 'bas') {
      if (form.nbr <= 30) this.cout = 5;
      if (form.nbr > 30) this.cout = 15;
    }
  }
}
