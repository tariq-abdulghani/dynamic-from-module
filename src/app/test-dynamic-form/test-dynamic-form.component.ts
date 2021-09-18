import { Component, OnInit } from '@angular/core';
import { BaseDynamicFormControl } from '../tah-dynamic-form/models/base-control';
import { SelectControl } from '../tah-dynamic-form/models/select-control';
import { TextControl } from '../tah-dynamic-form/models/text-control';

@Component({
  selector: 'app-test-dynamic-form',
  templateUrl: './test-dynamic-form.component.html',
  styleUrls: ['./test-dynamic-form.component.css'],
})
export class TestDynamicFormComponent implements OnInit {
  controls: BaseDynamicFormControl<string>[] = [
    new SelectControl({
      key: 'brave',
      label: 'Bravery Rating',
      options: [
        { key: 'solid', value: 'Solid' },
        { key: 'great', value: 'Great' },
        { key: 'good', value: 'Good' },
        { key: 'unproven', value: 'Unproven' },
      ],
      order: 3,
    }),

    new TextControl({
      type: 'text',
      key: 'firstName',
      label: 'First name',
      value: 'Bombasto',
      required: true,
      order: 1,
    }),

    new TextControl({
      key: 'emailAddress',
      label: 'Email',
      type: 'email',
      order: 2,
    }),
  ];

  ngOnInit(): void {}

  onSubmit(event: any) {
    console.log(event);
  }
}
