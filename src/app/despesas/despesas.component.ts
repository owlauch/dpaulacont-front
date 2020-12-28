import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  CentroDeCustoService,
  CreateDespesasDto,
  DespesasService,
  PessoasService,
} from 'app/api';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css'],
})
export class DespesasComponent implements OnInit {
  despesa = new Despesa();
  pessoas = [];
  cc = [];
  data = new FormControl(new Date());
  despesas = [];
  constructor(
    private pessoaService: PessoasService,
    private ccService: CentroDeCustoService,
    private despesaService: DespesasService
  ) {
    this.pessoaService['basePath'] = '/api';
    this.ccService['basePath'] = '/api';
    this.despesaService['basePath'] = '/api';
  }

  ngOnInit(): void {
    this.buscaPessoas();
    this.buscaCentroCusto();
    this.buscaDespesas();
  }

  buscaDespesas() {
    this.despesaService.despesasControllerFindAll().subscribe((x) => {
      this.despesas = x;
    });
  }
  buscaPessoas() {
    this.pessoaService.pessoasControllerFindAll().subscribe((x) => {
      this.pessoas = x;
    });
  }

  buscaCentroCusto() {
    this.ccService.centroCustoControllerFindAll().subscribe((x) => {
      this.cc = x;
    });
  }
  cadastrar() {
    this.despesa.data = this.data.value;
    this.despesaService
      .despesasControllerCreate(this.despesa)
      .subscribe((x) => {
        this.despesa = new Despesa();
        this.buscaDespesas();
      });
  }

  apagar(id) {
    this.despesaService.despesasControllerRemove(id).subscribe((x) => {
      this.buscaDespesas();
    });
  }
}

export class Despesa implements CreateDespesasDto {
  fonte: number;
  data: Date;
  destinado: string;
  valor: number;
  pagoPara: number;
  centroCusto: number;
}
