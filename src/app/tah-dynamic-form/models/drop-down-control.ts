import { BaseDynamicFormControl } from "./base-control";
import { ControlTypes } from "./control-types";

export class DropDownControl extends BaseDynamicFormControl<string>{
    controlType = ControlTypes.DROP_DOWN;
}