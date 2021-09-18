import { BaseDynamicFormControl } from "./base-control";
import { ControlTypes } from "./control-types";

export class TextControl extends BaseDynamicFormControl<string>{
    controlType = ControlTypes.TEXT;
}