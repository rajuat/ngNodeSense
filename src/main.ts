//bootstrap angular app

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

//dynamic - JIT compilation - converting HTML template to JS at browser level
platformBrowserDynamic().bootstrapModule(AppModule);

//platformBrowserDynamic().bootstrapModuleFactory(AppModule);

