import { Injectable } from '@angular/core';

import { Configuration } from 'weighted-screen';

@Injectable()
export class GrowConfiguration extends Configuration {
    constructor() {
        super('', 'assets/mock/mock.node.json');
    }
}