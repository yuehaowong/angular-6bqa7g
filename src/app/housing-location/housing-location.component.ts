import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  template: `
  <section class="listing">
  <img class="listing-photo"
       [src]="housingLocation.photo"
       alt="Exterior photo of {{housingLocation.name}}">
  <h2 class="listing-heading">{{housingLocation.name}}</h2>
  <p class="listing-location">
    {{housingLocation.city}}, {{housingLocation.state}}
  </p>
</section>
  `,
  styleUrls: ['./housing-location.component.css'],
  imports: [CommonModule],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
