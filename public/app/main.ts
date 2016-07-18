import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './components/myApp/app.component';
import {enableProdMode} from '@angular/core';

declare var _root:any;

if(_root.globals.enviroment != "development"){
  enableProdMode();
}

bootstrap(AppComponent);
