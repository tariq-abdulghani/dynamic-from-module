export class BaseDynamicFormControl<T> {
    
  value: T | undefined;
  key: string; // id and form key
  label: string;
  required: boolean;
  weight: number; // weight in bootstrap grid in display
  controlType: string; // our custom types

  
  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      weight?: number;
      controlType?: string;
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || "";
    this.label = options.label || "";
    this.required = !!options.required;
    this.weight = options.weight === undefined ? 4: options.weight;
    this.controlType = options.controlType || "";
  }
}
