import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, DynamicComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [DynamicComponent],
  providers: [FormBuilder]
})
export class AppModule { }
