import { templateJitUrl } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
  @Input() showReset: boolean = true;
  @Input() resetBtnWeight: number = 3;
  @Input() resetBtnLabel:string = 'reset';
  // for further development enable icons
  // @Input() resetBtnIcon:string='';
  // @Input() showResetIcon:boolean = true;
  @Input() submitBtnWeight: number = 3;
  @Input() submitBtnLabel:string = 'submit';
  // @Input() submitBtnIcon:string='';
  // @Input() showSubmitIcon:boolean = true;
  @Output() submitEvent: EventEmitter<any> = new EventEmitter();
  @Output() resetEvent: EventEmitter<any> = new EventEmitter();

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
    this.submitEvent.emit(this.form.getRawValue());
  }

  onReset(){
    this.resetEvent.emit(this.form.getRawValue());
  }
}
