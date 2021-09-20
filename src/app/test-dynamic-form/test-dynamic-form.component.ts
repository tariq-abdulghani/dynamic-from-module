import { Component, OnInit } from '@angular/core';
import { NgSelectOption } from '@angular/forms';
import { BaseDynamicFormControl } from '../tah-dynamic-form/models/base-control';
import { GenericSelectControl } from '../tah-dynamic-form/models/generic-select-control';
import {SelectControl } from '../tah-dynamic-form/models/select-control';
import { TextControl } from '../tah-dynamic-form/models/text-control';
import { SelectOption } from './models/select-options';

@Component({
  selector: 'app-test-dynamic-form',
  templateUrl: './test-dynamic-form.component.html',
  styleUrls: ['./test-dynamic-form.component.css'],
})
export class TestDynamicFormComponent implements OnInit {
  controls: BaseDynamicFormControl<any>[] = [
    // new SelectControl({
    //   key: 'brave',
    //   label: 'Bravery Rating',
    //   options: [
    //     { key: 'solid', value: 'Solid' },
    //     { key: 'great', value: 'Great' },
    //     { key: 'good', value: 'Good' },
    //     { key: 'unproven', value: 'Unproven' },
    //   ],
    //   weight: 6,
    // }),

    new TextControl({
      type: 'text',
      key: 'firstName',
      label: 'First name',
      value: 'Bombasto',
      required: true,
      weight: 6,
    }),

    new TextControl({
      key: 'emailAddress',
      label: 'Email',
      type: 'email',
      weight: 12,
      required: true
    }),

    new GenericSelectControl<SelectOption>({
      value:{ key: 'solid', value: 'Solid' },
      key: 'braveB',
      label: 'Bravery Rating',
      options: [
        { key: 'solid', value: 'Solid' },
        { key: 'great', value: 'Great' },
        { key: 'good', value: 'Good' },
        { key: 'unproven', value: 'Unproven' },
      ],
      weight: 6,
      bindValue: 'key',
      bindLabel: 'value',
      multiple: true
    })
  ];

  ngOnInit(): void {}

  onSubmit(event: any) {
    console.log(event);
  }
}
