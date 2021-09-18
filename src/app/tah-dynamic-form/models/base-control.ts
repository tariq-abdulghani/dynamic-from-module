export class BaseDynamicFormControl<T> {
    
  value: T | undefined;
  key: string; // id and form key
  label: string;
  required: boolean;
  order: number; // order in display
  controlType: string; // our custom types

  
  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || "";
    this.label = options.label || "";
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || "";
  }
}
