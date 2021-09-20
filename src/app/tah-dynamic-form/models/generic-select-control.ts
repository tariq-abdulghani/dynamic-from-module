import { BaseDynamicFormControl } from "./base-control";
import { ControlTypes } from "./control-types";

export class GenericSelectControl<T> extends BaseDynamicFormControl<T> {
    controlType = ControlTypes.GENERIC_DROP_DOWN;
    options: T[];//{ key: string; value: string }[];
    bindValue: undefined | string;
    bindLabel: string | number;
    multiple: boolean ;
    dropDownSize: number;
    constructor(
      options: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        weight?: number;
        type?: string;
        options?: T[];//{ key: string; value: string }[];
        bindValue?: string;
        bindLabel: string | number;
        multiple?:boolean;
        dropDownSize?: number;
      }
    ) {
      super({
        value: options.value as T,
        key: options.key,
        label: options.label,
        required: options.required,
        weight: options.weight,
      });
    //   this.value = options.value;
      this.options = options.options || [];
      this.bindValue = options.bindValue;
      this.bindLabel = options.bindLabel;
      this.multiple = options.multiple== true? true: false ;
      this.dropDownSize = options.dropDownSize? options.dropDownSize: 0;
    }
  }