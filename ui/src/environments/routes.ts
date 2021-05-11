import { Routes } from '@angular/router';
export const layoutRoutes: Routes = [
    // 如果路由为空就指向 index
    // 比如 http://locahost:4200/ => http://locahost:4200/index
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    // index
    {
        path: 'index',
        loadChildren: () =>
            import('../layout/index/index.module').then((x) => x.IndexModule),
    },
];

export const mainRoutes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', loadChildren: () => import('../main/home/home.module').then((x) => x.HomeModule)
    },
    {
        path: 'dashboard', loadChildren: () => import('../main/dashboard/dashboard.module').then((x) => x.DashboardModule)
    },

]