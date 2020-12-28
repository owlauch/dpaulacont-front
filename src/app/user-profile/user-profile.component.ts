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
    titulo: '',
  };
  constructor(private pessoaSer: PessoasService) {
    pessoaSer['basePath'] = '/api';
  }

  ngOnInit() {}
  cadastrar() {
    this.pessoaSer.pessoasControllerCreate(this.pessoa).subscribe((x) => {
      console.log(x);
    });
  }
}
