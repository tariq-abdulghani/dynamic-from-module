import { BaseDynamicFormControl } from "./base-control";
import { ControlTypes } from "./control-types";

export class TextControl extends BaseDynamicFormControl<string>{
    controlType = ControlTypes.TEXT;
    type: string; // html input type

    constructor(
        options: {
          type: string;
          value?: string;
          key?: string;
          label?: string;
          required?: boolean;
          weight?: number;
          controlType?: string;
          
        }
      ){
          super({
            value: options.value,
            key: options.key,
            label: options.label,
            required: options.required,
            weight: options.weight,
          });
          this.type = options.type;
      }
}