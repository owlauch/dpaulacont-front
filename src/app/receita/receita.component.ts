import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  CreateReceitaDto,
  PessoasService,
  ReceitasService,
  ServicosService,
} from 'app/api';
import * as moment from 'moment';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.less'],
})
export class ReceitaComponent implements OnInit {
  receita = new Receita();
  pessoas = [];
  servicos = [];
  receitas = [];
  data = new FormControl(new Date());
  nomeMeses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Augusto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Decembro',
  ];
  constructor(
    private pessoasService: PessoasService,
    private servicosService: ServicosService,
    private receitaService: ReceitasService
  ) {
    servicosService['basePath'] = '/api';
    pessoasService['basePath'] = '/api';
    receitaService['basePath'] = '/api';
  }

  ngOnInit(): void {
    this.buscaServicos();
    this.buscaPessoas();
    this.buscaReceitas();
  }
  buscaReceitas() {
    this.receitaService.receitasControllerFindAll().subscribe((x) => {
      this.receitas = x;
    });
  }
  buscaPessoas() {
    this.pessoasService
      .pessoasControllerFindAll()
      .subscribe((x) => (this.pessoas = x));
  }
  buscaServicos() {
    this.servicosService.servicosControllerFindAll().subscribe((x) => {
      this.servicos = x;
    });
  }

  apagar(id) {
    this.receitaService.receitasControllerRemove(id).subscribe((x) => {
      this.buscaReceitas();
    });
  }
  cadastrar() {
    this.receita.data = this.data.value;
    this.receitaService
      .receitasControllerCreate(this.receita)
      .subscribe((x) => {
        this.receita = new Receita();
        this.buscaReceitas();
      });
  }
}
export class Receita {
  ano;
  clienteId;
  data;
  fonte;
  mes;
  servicoId;
  valor;
}
