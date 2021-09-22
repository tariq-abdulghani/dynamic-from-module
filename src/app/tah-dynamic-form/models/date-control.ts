import { BaseDynamicFormControl } from './base-control';
import { ControlTypes } from './control-types';

export class DateControl extends BaseDynamicFormControl<string> {
   controlType = ControlTypes.DATE;
    type = 'date';
  minDate: string | undefined;
  maxDate: string | undefined;
  constructor(options: {
    value?: string;
    key?: string;
    label?: string;
    required?: boolean;
    weight?: number;
    mainDate?: string;
    maxDate?: string;
  }) {
    super({
      value: options.value,
      key: options.key,
      label: options.label,
      required: options.required,
      weight: options.weight,
    });

    this.maxDate = options.mainDate;
    this.maxDate = options.maxDate;
  }
}
