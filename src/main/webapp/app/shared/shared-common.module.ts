import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import {
    EuphoriaJavav1SharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        EuphoriaJavav1SharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        EuphoriaJavav1SharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class EuphoriaJavav1SharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
