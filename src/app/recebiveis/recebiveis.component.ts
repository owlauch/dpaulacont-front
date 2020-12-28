import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  CreateRecebiveisDto,
  PessoasService,
  RecebiveisService,
} from 'app/api';

@Component({
  selector: 'app-recebiveis',
  templateUrl: './recebiveis.component.html',
  styleUrls: ['./recebiveis.component.less'],
})
export class RecebiveisComponent implements OnInit {
  data = new FormControl(new Date());
  pessoas = [];
  recebiveis = new Recebiveis();
  constructor(
    private pessoasService: PessoasService,
    private recebiveisServices: RecebiveisService
  ) {
    pessoasService['basePath'] = '/api';
    recebiveisServices['basePath'] = '/api';
  }

  ngOnInit(): void {
    this.buscaPessoas();
  }
  buscaPessoas() {
    this.pessoasService
      .pessoasControllerFindAll()
      .subscribe((x) => (this.pessoas = x));
  }

  cadastrar() {}
}

export class Recebiveis implements CreateRecebiveisDto {
  descricao: string;
  mes: number;
  ano: number;
  valor: string;
  credor: number;
}
