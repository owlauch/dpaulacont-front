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

export interface CreateReceitaDto { 
    fonte: number;
    data: Date;
    valor: number;
    clienteId: number;
    ano: number;
    mes: number;
    servicoId: number;
    pago: boolean;
    valorQuitado: number;
}