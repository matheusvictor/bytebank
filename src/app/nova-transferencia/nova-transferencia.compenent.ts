import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(
    private service: TransferenciaService,
    private router: Router
  ) { }

  transferir() {
    console.log('Nova transferência solicitada!');
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };
    this.service
      .adicionarNovaTransferencia(valorEmitir)
      .subscribe(resultado => {
        this.router.navigateByUrl('extrato');
      },
        erro => console.error(erro));
  }

  limparCampos(): void {
    this.valor = 0;
    this.valor = 0;
  }

}
