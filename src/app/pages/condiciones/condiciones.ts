import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'condiciones',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './condiciones.html',
  styleUrls: ['./condiciones.scss'],
})
export class Condiciones {
  @Input() items: any[] = [];

  private _loading = false;
  @Input()
  set loading(loading: boolean) {
    this._loading = loading;
  }
  get loading() {
    return this._loading;
  }
}
