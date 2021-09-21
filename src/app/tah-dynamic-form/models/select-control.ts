import { BaseDynamicFormControl } from "./base-control";
import { ControlTypes } from "./control-types";

export class SelectControl extends BaseDynamicFormControl<string> {
  controlType = ControlTypes.DROP_DOWN;
  options: { key: string; value: string }[];

  constructor(
    options: {
      value?: string;
      key?: string;
      label?: string;
      required?: boolean;
      weight?: number;
      type?: string;
      options?: { key: string; value: string }[];
    } = {}
  ) {
    super({
      value: options.value,
      key: options.key,
      label: options.label,
      required: options.required,
      weight: options.weight,
    });
    this.options = options.options || [];
  }
}

