import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgtBasicControl } from '../../models/ngt-basic-control';
import { NgtDynamicFormService } from '../../services/ngt-dynamic-form.service';

@Component({
  selector: 'ngt-dynamic-form',
  templateUrl: './ngt-dynamic-form.component.html',
  styleUrls: ['./ngt-dynamic-form.component.css'],
  providers:[NgtDynamicFormService]
})
export class NgtDynamicFormComponent implements OnInit {

  @Input() controls: NgtBasicControl<any>[] = [];
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
  form!: FormGroup ;

  constructor(private ngtDynamicFormService: NgtDynamicFormService) { }

  ngOnInit() {
  }

  
  ngOnChanges(changes: SimpleChanges): void {
    // console.log("called after changes", changes);
    this.form = this.ngtDynamicFormService.toFormGroup(this.controls);
    // console.log(this.form);
  }


  onSubmit() {
    this.submitEvent.emit(this.form.getRawValue());
  }

  onReset(){
    this.resetEvent.emit(this.form.getRawValue());
  }
  
}
