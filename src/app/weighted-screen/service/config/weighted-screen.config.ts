import { Injectable } from '@angular/core';

@Injectable()
export class WeightedScreenConfig {

    constructor(public server: string, public apiUrl: string) {
    }
}