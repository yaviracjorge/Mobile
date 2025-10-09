import { Routes } from '@angular/router';
import { MenuPage } from './menu/menu.page';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: 'menu',
    component: MenuPage,
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then( m => m.TabsPage)
  },
  {
    path: 'tabs-menu',
    loadComponent: () => import('./tabs-menu/tabs-menu.page').then( m => m.TabsMenuPage)
  },
  {
    path: 'index',
    loadComponent: () => import('./prueba/index/index.page').then( m => m.IndexPage)
  }
];
