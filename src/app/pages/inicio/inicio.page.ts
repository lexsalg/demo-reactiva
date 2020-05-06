import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inicio-page',
  templateUrl: './inicio.page.html',
  styles: [
    `
      h1 {
        margin-bottom: 12px;
      }
    `,
  ],
})
export class InicioPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
