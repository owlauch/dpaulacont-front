import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
} from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { PessoasService, ReceitasService, ServicosService } from 'app/api';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { Moment } from 'moment';
import { Receita } from 'app/receita/receita.component';
import Swal from 'sweetalert2';

const moment = _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-recebiveis',
  templateUrl: './recebiveis.component.html',
  styleUrls: ['./recebiveis.component.less'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class RecebiveisComponent implements OnInit {
  data = new FormControl(moment());
  pessoas = [];
  servicos = [];
  receitas = [];
  recebiveis = new Receita();
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
    this.buscaPessoas();
    this.buscaServicos();
    this.buscaReceitas();
  }

  buscaReceitas() {
    this.receitaService.receitasControllerRecebiveis().subscribe((x) => {
      this.receitas = x;
    });
  }

  buscaServicos() {
    this.servicosService.servicosControllerFindAll().subscribe((x) => {
      this.servicos = x;
    });
  }
  buscaPessoas() {
    this.pessoasService
      .pessoasControllerFindAll()
      .subscribe((x) => (this.pessoas = x));
  }

  cadastrar() {
    this.recebiveis.pago = false;
    this.receitaService
      .receitasControllerCreate(this.recebiveis)
      .subscribe((x) => {
        this.recebiveis = new Receita();
        this.buscaReceitas();
      });
  }

  pagar(recebivel) {
    this.receitaService.receitasControllerUpdate(recebivel).subscribe((x) => {
      this.buscaReceitas();
    });
  }

  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.data.value;
    ctrlValue.year(normalizedYear.year());
    this.data.setValue(ctrlValue);
  }

  chosenMonthHandler(
    normalizedMonth: Moment,
    datepicker: MatDatepicker<Moment>
  ) {
    const ctrlValue = this.data.value;
    ctrlValue.month(normalizedMonth.month());
    this.data.setValue(ctrlValue);
    datepicker.close();
  }

  apagar(id) {
    this.receitaService.receitasControllerRemove(id).subscribe((x) => {
      this.buscaReceitas();
    });
  }
}
