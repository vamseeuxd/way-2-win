import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'home', canActivate: [authGuard],
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'trade',
    loadComponent: () => import('./pages/trade/trade.page').then( m => m.TradePage)
  },
  {
    path: 'status',
    loadComponent: () => import('./pages/status/status.page').then( m => m.StatusPage)
  },
];
