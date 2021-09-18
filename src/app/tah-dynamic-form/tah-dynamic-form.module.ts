import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TahDynamicFormComponent } from './tah-dynamic-form/tah-dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TahDynamicFormControlComponent } from './tah-dynamic-form-control/tah-dynamic-form-control.component';



@NgModule({
  declarations: [
    TahDynamicFormComponent,
    TahDynamicFormControlComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[TahDynamicFormComponent]
})
export class TahDynamicFormModule { }
