import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ApplicationModule } from './app/app.module';

import 'core-js';
import 'zone.js/dist/zone';

var ENV: string;

if (ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ApplicationModule);