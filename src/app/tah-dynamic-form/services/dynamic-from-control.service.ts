import { Injectable } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { BaseDynamicFormControl } from "../models/base-control";

@Injectable()
export class DynamicFormControlService {
  constructor() {}

  toFormGroup(controls: BaseDynamicFormControl<string>[]) {
    const group: any = {};

    controls.forEach((control) => {
      group[control.key] = control.required
        ? new FormControl(control.value || "", Validators.required)
        : new FormControl(control.value || "");
    });
    return new FormGroup(group);
  }
}
