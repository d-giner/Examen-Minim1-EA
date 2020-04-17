import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routing } from './routes';
import { Location } from '../models/Location';

@Injectable({
    providedIn: 'root'
})
export class LocationService {

    routing: Routing;

    constructor(private http: HttpClient) {
        this.routing = new Routing();
    }

    getLocations() {
        return this.http.get(this.routing.urlLocation);
    }

    postLocation(location: Location) {
        return this.http.post(this.routing.urlLocation, location);
    }

    updateLocation(object: object) {
        return this.http.put(this.routing.urlLocation, object);
    }
}