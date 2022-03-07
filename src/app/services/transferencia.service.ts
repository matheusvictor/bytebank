import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: any[];

  constructor() {
    this.listaTransferencias = [];
  }

  get obterTransferencias() {
    return this.listaTransferencias;
  }

  adicionarNovaTransferencia(transferencia: any) {
    this.datarTransferencia(transferencia);
    this.listaTransferencias.push(transferencia);
  }

  private datarTransferencia(transferencia: any) {
    transferencia.data = new Date()
  }

}
