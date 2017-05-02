import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeightedScreenModule } from './weighted-screen/weighted-screen.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        WeightedScreenModule.forRoot({
            server: '',
            apiUrl: 'assets/mock/mock.node.json'
        })
    ],
    bootstrap: [AppComponent]
})

export class ApplicationModule {}