import { Component } from '@angular/core';
import { BaseDynamicFormControl } from './tah-dynamic-form/models/base-control';
import { DropDownControl } from './tah-dynamic-form/models/drop-down-control';
import { TextControl } from './tah-dynamic-form/models/text-control';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'tah-dynamic-form-module';

}
