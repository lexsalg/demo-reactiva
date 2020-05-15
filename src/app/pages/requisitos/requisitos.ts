import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'requisitos',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './requisitos.html',
  styleUrls: ['./requisitos.scss'],
})
export class Requisitos {
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
