import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgtBasicControl } from '../models/ngt-basic-control';

@Injectable()
export class NgtDynamicFormService {
  constructor() {}

  toFormGroup(controls: NgtBasicControl<any>[]) {
    const group: any = {};

    controls.forEach((control) => {
      group[control.key] = control;
      //new FormControl(control.toKeyValueRepresentation())
      // : new FormControl(control.value || "");
    });
    // console.log(group);
    return new FormGroup(group);
  }
}
