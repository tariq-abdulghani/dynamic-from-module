import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlTypeEnum } from '../../models/control-type';
import { NgtBasicControl } from '../../models/ngt-basic-control';

@Component({
  selector: 'ngt-control',
  templateUrl: './ngt-control.component.html',
  styleUrls: ['./ngt-control.component.css']
})
export class NgtControlComponent implements OnInit {

  @Input() control!: NgtBasicControl<any>;
  @Input() form!: FormGroup ;
  CONTROL_TYPES = ControlTypeEnum;
  constructor() { }

  ngOnInit(): void {
  }

}
