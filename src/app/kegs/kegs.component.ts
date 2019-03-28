import { Component, OnInit, Input } from '@angular/core';
import { Keg } from '../keg';

@Component({
  selector: 'kegs',
  templateUrl: './kegs.component.html',
  styleUrls: ['./kegs.component.scss']
})
export class KegsComponent implements OnInit {
  @Input() kegList: Keg[];
  selectedKeg: Keg;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.selectedKeg = this.kegList[0];

    });
  }

  onSelect(keg: Keg): void {
    this.selectedKeg = keg;
  }

  addKeg(keg: Keg): void {
    const newKeg: Keg = {id: this.kegList.length + 11, name: "new", brand: "new", price: 0, abv: 0, ibu: 0, volume: 124};
    this.kegList.push(newKeg);
  }

  sellPint(keg: Keg): void {
    this.kegList[keg.id-11].volume--;
  }

  refill(keg: Keg): void {
    this.kegList[keg.id-11].volume = 124;
  }

}
