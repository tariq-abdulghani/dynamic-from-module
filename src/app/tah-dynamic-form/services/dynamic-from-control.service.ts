import { Injectable } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { BaseDynamicFormControl } from "../models/base-control";

@Injectable()
export class DynamicFormControlService {
  constructor() {}

  toFormGroup(controls: BaseDynamicFormControl<string>[]) {
    const group: any = {};

    controls.forEach((question) => {
      group[question.key] = question.required
        ? new FormControl(question.value || "", Validators.required)
        : new FormControl(question.value || "");
    });
    return new FormGroup(group);
  }
}
