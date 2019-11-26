import {
  ApplicationRef,
  Component,
  Injector,
  ViewChildren
} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {
  FieldConfig
} from '../../../common/entity/entity-form/models/field-config.interface';
import { FieldSet } from 'app/pages/common/entity/entity-form/models/fieldset.interface';

import {RestService, WebSocketService} from '../../../../services/';

import * as _ from 'lodash';
import helptext from '../../../../helptext/storage/snapshots/snapshots';


@Component({
  selector : 'snapshot-clone',
  template : `<entity-form [conf]="this"></entity-form>`
})

export class SnapshotCloneComponent {

  protected resource_name: string = 'storage/snapshot';
  protected route_success: string[] = [ 'storage', 'pools' ];
  protected route_cancel: string[] = [ 'storage', 'snapshots' ];
  protected pk: any;
  protected isEntity: boolean = true;
  protected isNew: boolean = true;

  public fieldConfig: FieldConfig[] = [];
  public fieldSets: FieldSet[] = [
    {
      name: helptext.label_clone,
      class: 'clone',
      label:true,
      config: [
        {
          type: 'input',
          name: 'name',
          placeholder: helptext.snapshot_clone_name_placeholder,
          tooltip: helptext.snapshot_clone_name_tooltip,
          required: true,
          validation : helptext.snapshot_clone_name_validation
        }
      ]
    }];

  get custom_add_query(): string {
    return this.resource_name + '/' + this.pk + '/clone/'
  }

  @ViewChildren('component') components;

  constructor(protected router: Router, protected route: ActivatedRoute,
              protected rest: RestService, protected ws: WebSocketService,
              protected _injector: Injector, protected _appRef: ApplicationRef) {}

  preInit(entityForm: any) {
    this.route.params.subscribe(params => {
      this.pk = params['pk'];
    });
  }

  afterInit(entityForm: any) {
    entityForm.formGroup.controls['name'].setValue(this.setName(this.pk));
  }

  setName(name) {
    let value;
    if (name.indexOf('/') !== -1) {
      value = name.replace("@", "-") + "-clone";
    } else {
      value = name.replace("@", "/") + "-clone";
    }

    return value;
  }
}
