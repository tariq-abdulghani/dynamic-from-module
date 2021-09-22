import { BaseDynamicFormControl } from './base-control';
import { ControlTypes } from './control-types';

export class CheckboxControl extends BaseDynamicFormControl<boolean> {
  controlType = ControlTypes.CHECKBOX;
  type = 'checkbox';

  constructor(options: {
    value?: boolean;
    key?: string;
    label?: string;
    required?: boolean;
    weight?: number;
  }) {
    super({
      value: options.value,
      key: options.key,
      label: options.label,
      required: options.required,
      weight: options.weight,
    });
  }
}
