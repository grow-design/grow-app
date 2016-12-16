import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')]
})

export class AppComponent implements OnInit {

    ngOnInit(){
    }
}
