import { Component, OnInit } from '@angular/core';
import {Med} from '../meds';
import { MEDS } from '../mockmeds';

@Component({
  selector: 'app-meds',
  templateUrl: './meds.component.html',
  styleUrls: ['./meds.component.css']
})
export class MedsComponent implements OnInit {

  med: Med = {
    id: 1,
    name: 'Percocets'
  };

  meds = MEDS;

  selectedMed: Med;

  onSelect(med: Med): void {
    this.selectedMed = med;
}

  constructor() { }

  ngOnInit() {
  }


}
