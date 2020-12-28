import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { CentroDeCustoService } from './api/centroDeCusto.service';
import { DespesasService } from './api/despesas.service';
import { PessoasService } from './api/pessoas.service';
import { RecebiveisService } from './api/recebiveis.service';
import { ReceitasService } from './api/receitas.service';
import { ServicosService } from './api/servicos.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    CentroDeCustoService,
    DespesasService,
    PessoasService,
    RecebiveisService,
    ReceitasService,
    ServicosService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration) {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
