// @ts-ignore
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
// @ts-ignore
import {HttpClient} from '@angular/common/http';

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-protein',
  templateUrl: './protein.component.html',
  styleUrls: ['./protein.component.css']
})
export class ProteinComponent implements OnInit {
  @ViewChild('recipe') recipes: ElementRef;
  @ViewChild('place') places: ElementRef;
  recipeValue: any;
  placeValue: any;
  venueList = [];
  recipeList = [];

  currentLat: any;
  currentLong: any;
  geolocationPosition: any;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {
        // throw new Error("Method not implemented.");
    }



  getVenues() {

    this.recipeValue = this.recipes.nativeElement.value;
    this.placeValue = this.places.nativeElement.value;

    if (this.recipeValue !== null) {
      /**
       * Write code to get recipe
       */
    }

    if (this.placeValue != null && this.placeValue !== '' && this.recipeValue != null && this.recipeValue !== '') {
      /**
       * Write code to get place
       */
    }
  }
}
