import { Component } from '@angular/core';

@Component({
  selector: 'pages',
  styleUrls: ['./pages.scss'],
  templateUrl: './pages.html',
})
export class Pages {
  cajacusco: string;
  constructor() {
    this.cajacusco = `Caja Municipal de Ahorro y Crédito Cusco S.A. © ${new Date().getFullYear()} | Todos los derechos reservados.`;
  }
}
