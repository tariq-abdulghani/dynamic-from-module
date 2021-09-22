import { BaseDynamicFormControl } from "./base-control";
import { compareFn } from "./compare-with";
import { ControlTypes } from "./control-types";
import { EventCallBackFn } from "./event-callback";

export class SelectControl<T> extends BaseDynamicFormControl<T> {
    controlType = ControlTypes.GENERIC_DROP_DOWN;
    options: T[];//{ key: string; value: string }[];
    bindValue: undefined | string;
    bindLabel: string | number;
    multiple: boolean ;
    dropDownSize: number;
    compareWith?: compareFn<T>;
    onChange?: EventCallBackFn;

    constructor(
      options: {
        value?: T| T[];
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
        compareWith?: compareFn<T>;
        onChange?: EventCallBackFn;
      }
    ) {
      super({
        value: options.value as T,
        key: options.key,
        label: options.label,
        required: options.required,
        weight: options.weight,
      });
      this.options = options.options || [];
      this.bindValue = options.bindValue;
      this.bindLabel = options.bindLabel;
      this.multiple = options.multiple== true? true: false ;
      this.dropDownSize = options.dropDownSize? options.dropDownSize: 0;
      this.compareWith = options.compareWith?options.compareWith: (a,b) => a == b;
      this.onChange = options.onChange? options.onChange: (ev?:any)=> console.log(ev);
    }
  }