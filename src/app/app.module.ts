import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Http, XHRBackend, RequestOptions,
    BrowserXhr, BaseRequestOptions, ResponseOptions,
    BaseResponseOptions, XSRFStrategy, CookieXSRFStrategy } from '@angular/http';

const HTTP_PROVIDERS: Array<any> = [
    {
        provide: Http,
        useFactory:
            (xhrBackend: XHRBackend, requestOptions: RequestOptions)
                : Http => new Http(xhrBackend, requestOptions),
                    deps: [XHRBackend, RequestOptions]
    },
    BrowserXhr,
    {
        provide: RequestOptions, useClass: BaseRequestOptions
    },
    {
        provide: ResponseOptions, useClass: BaseResponseOptions
    },
    XHRBackend,
    {
        provide: XSRFStrategy, useFactory: () => new CookieXSRFStrategy()
    }
];

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent],
    providers: [
        HTTP_PROVIDERS
    ]
})

export class ApplicationModule {}