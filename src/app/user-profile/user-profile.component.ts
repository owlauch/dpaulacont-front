import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreatePessoaDto, PessoasService } from 'app/api';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  @ViewChild('formPessoa')
  form: NgForm;
  pessoa: CreatePessoaDto = {
    agencia: '',
    banco: '',
    nome: '',
    cnpj: '',
    conta: '',
    cpf: '',
    email: '',
    nsc: '',
    senhaCertificado: '',
    senhaNfs: '',
    senhaSimples: '',
    telefone: '',
    clienteMensal: false,
    titulo: '',
  };
  pessoas = [];
  constructor(
    private pessoaSer: PessoasService,
    private pessoasServ: PessoasService
  ) {
    pessoasServ['basePath'] = '/api';
    pessoaSer['basePath'] = '/api';
  }

  cadastrar() {
    this.pessoaSer.pessoasControllerCreate(this.pessoa).subscribe((x) => {
      console.log(x);
    });
  }

  ngOnInit() {
    this.buscaPessoas();
  }

  buscaPessoas() {
    this.pessoasServ.pessoasControllerFindAll().subscribe((x) => {
      this.pessoas = x;
    });
  }
}
