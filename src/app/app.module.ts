import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TahDynamicFormModule } from './tah-dynamic-form/tah-dynamic-form.module';
import { TestDynamicFormComponent } from './test-dynamic-form/test-dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TestDynamicFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TahDynamicFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
