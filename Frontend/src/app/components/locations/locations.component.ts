import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/services/LocationService';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from 'src/models/Location';

@Component({
  selector: 'locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  location = new Location;
  locations: Location[];
  mostrar: boolean = false;
  estat: string;

  addNewLocationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    population: new FormControl(''),
    latitude: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(11)]),
    longitude: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(11)]),
  });

  updateLocationForm = new FormGroup({
    name: new FormControl(''),
    state: new FormControl(''),
    population: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl(''),
    id: new FormControl('', Validators.required)
  });

  postNewLocation(values) {
    this.location.name = values.name;
    this.location.state = values.state;
    this.location.population = values.population;
    this.location.latitude = values.latitude;
    this.location.longitude = values.longitude;
    this.locationService.postLocation(this.location).subscribe(res => {
      console.log(res);
      this.addNewLocationForm.reset();
    },
      err => {
        console.log(err);
      });
  }

  getLocations() {
    this.locationService.getLocations().subscribe(res => {
      this.locations = res as Location[];
      this.mostrar = true;
    },
      err => {
        console.log(err);
      });
  }

  updateLocation(values) {
    this.location.id = values.id;
    this.location.name = values.name;
    this.location.state = values.state;
    this.location.population = values.population;
    this.location.latitude = values.latitude;
    this.location.longitude = values.longitude;
    this.locationService.updateLocation(this.location).subscribe(res => {
      console.log(res);
      this.updateLocationForm.reset();
    },
      err => {
        console.log(err);
      });

  }

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
  }

}
