import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: any[];
  private url = `http://localhost:3000/transferencias`;

  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = [];
  }

  get obterTransferencias() {
    return this.listaTransferencias;
  }

  obterTodasTransferencias(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionarNovaTransferencia(transferencia: Transferencia): Observable<Transferencia> {
    this.datarTransferencia(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private datarTransferencia(transferencia: any) {
    transferencia.data = new Date()
  }

}
