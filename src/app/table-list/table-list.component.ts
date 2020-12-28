import { Component, OnInit } from '@angular/core';
import { PessoasService } from 'app/api';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})
export class TableListComponent implements OnInit {
  pessoas = [];
  constructor(private pessoasServ: PessoasService) {
    pessoasServ['basePath'] = '/api';
  }

  ngOnInit() {
    this.buscaPessoas();
    console.log(this.pessoas);
  }

  buscaPessoas() {
    this.pessoasServ.pessoasControllerFindAll().subscribe((x) => {
      this.pessoas = x;
    });
  }
}
