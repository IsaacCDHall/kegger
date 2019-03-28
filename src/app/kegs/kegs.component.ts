import { Component, OnInit } from '@angular/core';
import { Keg } from '../keg';
import { KEGS } from '../mock-kegs';

@Component({
  selector: 'kegs',
  templateUrl: './kegs.component.html',
  styleUrls: ['./kegs.component.scss']
})
export class KegsComponent implements OnInit {
  kegs = KEGS;

  selectedKeg: Keg;

  constructor() { }

  ngOnInit() {
    this.selectedKeg = KEGS[0];
  }

  onSelect(keg: Keg): void {
    this.selectedKeg = keg;
  }

  addKeg(keg: Keg): void {
    const newKeg: Keg = {id: KEGS.length + 11, name: "new", brand: "new", price: 0, abv: 0, ibu: 0, volume: 124};
    KEGS.push(newKeg);
  }

  sellPint(keg: Keg): void {
    KEGS[keg.id-11].volume--;
  }

}
