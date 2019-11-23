import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public plants = true;
  public sews = false;
  public thrash = false;

  constructor() {}

  imagesPlants() {
    this.plants = true;
    this.sews = false;
    this.thrash = false;
  }

  imagesSew() {
    this.plants = false;
    this.sews = true;
    this.thrash = false;
  }

  imagesThrash() {
    this.plants = false;
    this.sews = false;
    this.thrash = true;
  }
}
