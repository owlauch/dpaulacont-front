import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/despesa', title: 'Despesa', icon: 'payment', class: '' },
  { path: '/receita', title: 'Receita', icon: 'attach_money', class: '' },
  { path: '/pessoas', title: 'Cadastro Pessoas', icon: 'person', class: '' },
  {
    path: '/table-list',
    title: 'Lista/Pessoas',
    icon: 'content_paste',
    class: '',
  },
  { path: '/servicos', title: 'Servicos', icon: 'library_books', class: '' },
  {
    path: '/recebiveis',
    title: 'Recebiveis',
    icon: 'library_books',
    class: '',
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
