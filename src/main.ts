// load main module in to browser
//bootstrapping

// from node_modules, moved into vendor bundle

import {platformBrowserDynamic} 
        from '@angular/platform-browser-dynamic'

// from our app, moved into main.bundle.js
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)