import { ValidatorFn, AbstractControlOptions, AsyncValidatorFn } from "@angular/forms";
import { compareFn } from "./compare-with";
import { ControlTypeEnum } from "./control-type";
import { EventCallBackFn } from "./event-callback";
import { NgtBasicControl } from "./ngt-basic-control";


export class NgtSelectControl<T> extends NgtBasicControl<T> {
  controlType = ControlTypeEnum.SELECT;
  options: T[]; //{ key: string; value: string }[];
  bindValue: undefined | string;
  bindLabel: string | number;
  multiple: boolean;
  dropDownSize: number;
  compareWith?: compareFn<T>;
  onChange?: EventCallBackFn;

  constructor(params: {
    value?: T ;
    formState: any | null;
    validatorOrOpts?: ValidatorFn | AbstractControlOptions | ValidatorFn[];
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[];
    key: string;
    label?: string;
    required?: boolean;
    weight?: number;
    options?: T[];//{ key: string; value: string }[];
    bindValue?: string;
    bindLabel: string | number;
    multiple?:boolean;
    dropDownSize?: number;
    compareWith?: compareFn<T>;
    onChange?: EventCallBackFn;
  }){
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
      this.options = params.options || [];
      this.bindValue = params.bindValue;
      this.bindLabel = params.bindLabel;
      this.multiple = params.multiple === true? true: false ;
      this.dropDownSize = params.dropDownSize? params.dropDownSize: 0;
      this.compareWith = params.compareWith?params.compareWith: (a,b) => a == b;
      this.onChange = params.onChange? params.onChange: (ev?:any)=> console.log(ev);
  }
}