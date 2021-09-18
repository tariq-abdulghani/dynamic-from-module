import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseDynamicFormControl } from '../models/base-control';

@Component({
  selector: 'app-tah-dynamic-form-control',
  templateUrl: './tah-dynamic-form-control.component.html',
  styleUrls: ['./tah-dynamic-form-control.component.css']
})
export class TahDynamicFormControlComponent implements OnInit {

  @Input() control!: BaseDynamicFormControl<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.control.key].untouched || this.form.controls[this.control.key].valid; }
  
  constructor() { }

  ngOnInit(): void {
  }

}
