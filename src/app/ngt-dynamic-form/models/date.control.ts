import {
  ValidatorFn,
  AbstractControlOptions,
  AsyncValidatorFn,
} from '@angular/forms';
import { ControlTypeEnum } from './control-type';
import { NgtBasicControl } from './ngt-basic-control';

export class NgtDateControl extends NgtBasicControl<string> {
  type = 'date';
  controlType = ControlTypeEnum.DATE;

  minDate: string | undefined;
  maxDate: string | undefined;
  constructor(params: {
    value?: string;
    formState: any | null;
    validatorOrOpts?: ValidatorFn | AbstractControlOptions | ValidatorFn[];
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[];
    key: string;
    label?: string;
    required?: boolean;
    weight?: number;
    mainDate?: string;
    maxDate?: string;
  }) {
    super({
      value: params.value,
      formState: params.formState,
      validatorOrOpts: params.validatorOrOpts,
      asyncValidator: params.asyncValidator,
      key: params.key,
      label: params.label,
      required: params.required,
      weight: params.weight,
    });
    this.maxDate = params.mainDate;
    this.maxDate = params.maxDate;
  }
}
