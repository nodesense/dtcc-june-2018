import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { IEditable } from '../components/product-edit/product-edit.component';

@Injectable()
export class SaveAlertGuard implements CanDeactivate<IEditable> {
  canDeactivate(target: IEditable) {
    if (target.isSaved()) {
      return true;
    }

     return window.confirm("Unsaved changes found, exit?");
  }
}
