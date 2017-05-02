import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';

import { WeightedScreenComponent } from './component/weighted-screen.component';
import { WeightedScreenService } from './service/weighted-screen.service';
import { WeightedScreenConfig } from './service/config/weighted-screen.config';

@NgModule({
    imports: [
        CommonModule, HttpModule
    ],
    declarations: [
        WeightedScreenComponent
    ],
    exports: [
        WeightedScreenComponent
    ],
    providers: [
        WeightedScreenService
    ]
})

export class WeightedScreenModule {
    static forRoot(config: WeightedScreenConfig): ModuleWithProviders {
        return {
            ngModule: WeightedScreenModule,
            providers: [
                {
                    provide: WeightedScreenConfig, useValue: config
                }
            ]
        };
    }
}
