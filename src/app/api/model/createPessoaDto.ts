/**
 * DPaulaCont
 * Descrição - DPaulaCont API 
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface CreatePessoaDto { 
    nome: string;
    email: string;
    banco: string;
    agencia: string;
    conta: string;
    telefone: string;
    nsc: string;
    titulo: string;
    cnpj: string;
    cpf: string;
    clienteMensal: boolean;
    senhaSimples: string;
    senhaCertificado: string;
    senhaNfs: string;
}