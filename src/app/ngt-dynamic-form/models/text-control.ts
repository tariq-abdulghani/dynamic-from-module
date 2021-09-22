import { ValidatorFn, AbstractControlOptions, AsyncValidatorFn } from "@angular/forms";
import { ControlTypeEnum } from "./control-type";
import { NgtBasicControl } from "./ngt-basic-control";

export class NgtTextControl extends NgtBasicControl<string> {
  controlType = ControlTypeEnum.TEXT;
  type: string;

  constructor(params: {
    type: string;
    value?: string;
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
      weight: params.weight,
    });
    this.type = params.type;
  }
}