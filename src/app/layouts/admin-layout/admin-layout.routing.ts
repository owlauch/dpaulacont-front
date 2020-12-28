import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../servicos/typography.component';
import { ReceitaComponent } from 'app/receita/receita.component';
import { DespesasComponent } from 'app/despesas/despesas.component';
import { RecebiveisComponent } from 'app/recebiveis/recebiveis.component';

export const AdminLayoutRoutes: Routes = [
  // {
  //   path: '',
  //   children: [ {
  //     path: 'dashboard',
  //     component: DashboardComponent
  // }]}, {
  // path: '',
  // children: [ {
  //   path: 'userprofile',
  //   component: UserProfileComponent
  // }]
  // }, {
  //   path: '',
  //   children: [ {
  //     path: 'icons',
  //     component: IconsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'notifications',
  //         component: NotificationsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'maps',
  //         component: MapsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'typography',
  //         component: TypographyComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'upgrade',
  //         component: UpgradeComponent
  //     }]
  // }
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pessoas', component: UserProfileComponent },
  { path: 'table-list', component: TableListComponent },
  { path: 'receita', component: ReceitaComponent },
  { path: 'despesa', component: DespesasComponent },
  { path: 'servicos', component: TypographyComponent },
  { path: 'recebiveis', component: RecebiveisComponent },
];
