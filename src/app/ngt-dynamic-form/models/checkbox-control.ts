import { ValidatorFn, AbstractControlOptions, AsyncValidatorFn } from "@angular/forms";
import { ControlTypeEnum } from "./control-type";
import { NgtBasicControl } from "./ngt-basic-control";

export class NgtCheckboxControl extends NgtBasicControl<boolean> {
  controlType = ControlTypeEnum.CHECKBOX;
  type = 'checkbox';

  constructor(params: {
    value?: boolean;
    formState: any | null;
    validatorOrOpts?: ValidatorFn | AbstractControlOptions | ValidatorFn[];
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[];
    key: string;
    label?: string;
    required?: boolean;
    weight?: number;
  }) {
    super({
        value: params.value,
        formState: params.formState,
        validatorOrOpts: params.validatorOrOpts,
        asyncValidator: params.asyncValidator,
        key: params.key,
        label: params.label,
        required: params.required,
        weight: params.weight
    });
  }
}