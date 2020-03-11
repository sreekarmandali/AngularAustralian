import { NgModule } from '@angular/core';
import { LoginComponent } from './modules/auth/page/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { NoAuthGuard } from '../app/core/gaurd/no-auth.guard';
const routes: Routes = [{
  path: '',
  redirectTo: '/auth/login',
  pathMatch: 'full'
},
  {
    path: 'auth',
    loadChildren: () =>
    import('@modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    component: HomeLayoutComponent,
    canActivate: [NoAuthGuard],
  },
  {
        path: 'PFacilities',
        loadChildren: () =>
        import('@modules/Pfacilities/pfacilities.module').then(m => m.PfacilitiesModule)
   },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
