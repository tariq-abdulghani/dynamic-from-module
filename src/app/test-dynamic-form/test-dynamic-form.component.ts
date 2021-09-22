import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { NgtBasicControl } from '../ngt-dynamic-form/models/ngt-basic-control';
import { NgtTextControl } from '../ngt-dynamic-form/models/text-control';
import { BaseDynamicFormControl } from '../tah-dynamic-form/models/base-control';
import { CheckboxControl } from '../tah-dynamic-form/models/checkbox-control';
import { DateControl } from '../tah-dynamic-form/models/date-control';
import { SelectControl } from '../tah-dynamic-form/models/select-control';
import { TextControl } from '../tah-dynamic-form/models/text-control';
import { SelectOption } from './models/select-options';

@Component({
  selector: 'app-test-dynamic-form',
  templateUrl: './test-dynamic-form.component.html',
  styleUrls: ['./test-dynamic-form.component.css'],
})
export class TestDynamicFormComponent implements OnInit {
  controls: NgtBasicControl<any>[] = [

    new NgtTextControl({
      type:'text',
      weight:12,
      label:"text1",
      key: "text1",
      formState: null,
      required: true,
      value: "zezo",
      validatorOrOpts:[Validators.required]
    }),
    new NgtTextControl({
      type:'text',
      weight:12,
      label:"text2",
      key: "text2",
      formState: null,
      required: true,
      value: "lol",
      validatorOrOpts:[Validators.required]
    }),
    // new DateControl({
    //   key:'birthDate',
    //   label:'birthDate',
    //   required: true,
    //   value: new Date().toISOString().split('T')[0],
    //   weight:6
    // }),

    // new DateControl({
    //   key:'expireDate',
    //   label:'expireDate',
    //   required: false,
    //   value: new Date().toISOString().split('T')[0],
    //   weight:6
    // }),

    // new TextControl({
    //   type: 'text',
    //   key: 'firstName',
    //   label: 'First name',
    //   value: 'Bombasto',
    //   required: true,
    //   weight: 6,
    // }),

    // new TextControl({
    //   key: 'emailAddress',
    //   label: 'Email',
    //   type: 'email',
    //   weight: 6,
    //   required: true
    // }),

    // new TextControl({
    //   key: 'password',
    //   label: 'password',
    //   type: 'password',
    //   weight: 6,
    //   required: true
    // }),

    // new CheckboxControl({
    //   value: false,
    //   key: 'delivery',
    //   label: 'delivery',
    //   weight:2
    // }),
    // new SelectControl<SelectOption>({
    //   value:[{ key: 'solid', value: 'Solid' }],
    //   key: 'braveB',
    //   label: 'Bravery Rating',
    //   options: [
    //     { key: 'solid', value: 'Solid' },
    //     { key: 'great', value: 'Great' },
    //     { key: 'good', value: 'Good' },
    //     { key: 'unproven', value: 'Unproven' },
    //   ],
    //   weight: 6,
    //   bindValue: undefined,//'key'
    //   bindLabel: 'value',
    //   multiple: true,
    //   compareWith:(a, b) => a.key == b.key
    // })
  ];

  ngOnInit(): void {}

  onSubmit(event: any) {
    console.log(event);
  }
}
