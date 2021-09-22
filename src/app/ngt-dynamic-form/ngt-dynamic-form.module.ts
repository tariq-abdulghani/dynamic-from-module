import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgtControlComponent } from './components/ngt-control/ngt-control.component';
import { NgtDynamicFormComponent } from './components/ngt-dynamic-form/ngt-dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NgtControlComponent,
    NgtDynamicFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[NgtDynamicFormComponent]
})
export class NgtDynamicFromModule { }
