import {
  AbstractControl,
  AbstractControlOptions,
  AsyncValidatorFn,
  FormControl,
  ValidatorFn,
} from '@angular/forms';
import { ControlTypeEnum } from './control-type';

export class NgtBasicControl <T>extends FormControl {
  // value:any | null;
  key: string; // id and form key
  label: string;
  required: boolean;
  weight: number; // weight in bootstrap grid in display
  controlType!: ControlTypeEnum; // our custom types
  constructor(params: {
    value?: T;
    formState: any | null;
    validatorOrOpts?: ValidatorFn | AbstractControlOptions | ValidatorFn[];
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[];
    key: string;
    label?: string;
    required?: boolean;
    weight?: number;
  }) {
    super(
      params.formState ? params.formState : null,
      params.validatorOrOpts,
      params.asyncValidator
    );
    super.setValue(params.value);
    this.key = params.key;
    this.label = params.label ? params.label : '';
    this.weight = params.weight ? params.weight : 4;
    this.required = params.required == true ? true : false;
  }

  /**
   * Returns key value representation to be used to initialize form group
   *
   * @returns {[key: string]: AbstractControl }
   */
  public toKeyValueRepresentation(): { [key: string]: AbstractControl } {
    return { [this.key]: this };
  }
}
