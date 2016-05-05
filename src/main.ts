import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { SwContainerComponent } from './app/components/sw-container/index';
import { environment } from './app/environment';
import {HTTP_PROVIDERS} from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(SwContainerComponent,[HTTP_PROVIDERS]);
