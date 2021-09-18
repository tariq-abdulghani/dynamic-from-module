import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseDynamicFormControl } from '../models/base-control';
import { DynamicFormControlService } from '../services/dynamic-from-control.service';

@Component({
  selector: 'tah-dynamic-form',
  templateUrl: './tah-dynamic-form.component.html',
  styleUrls: ['./tah-dynamic-form.component.css'],
  providers: [DynamicFormControlService]
})
export class TahDynamicFormComponent implements OnInit, OnChanges{

  
  @Input() controls: BaseDynamicFormControl<string>[] | null = [];
  form!: FormGroup;
  payLoad: string = '';

  constructor(private formCtrlService: DynamicFormControlService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("called after changes", changes);
    this.form = this.formCtrlService.toFormGroup(this.controls as BaseDynamicFormControl<string>[]);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

}
