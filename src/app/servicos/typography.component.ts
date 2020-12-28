import { Component, OnInit } from '@angular/core';
import { ServicosService } from 'app/api';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css'],
})
export class TypographyComponent implements OnInit {
  servicos = [];
  constructor(private servicosService: ServicosService) {
    servicosService['basePath'] = '/api';
  }

  ngOnInit() {
    this.buscaServicos();
  }
  buscaServicos() {
    this.servicosService.servicosControllerFindAll().subscribe((x) => {
      this.servicos = x;
    });
  }
}
