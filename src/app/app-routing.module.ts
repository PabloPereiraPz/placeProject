import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { authGuard } from './auth.guard';

const routes: Routes = [  { 
    path: '', 
    component: LandingpageComponent, 
    pathMatch: 'full',
    data: { animation: 'landing' }
  },
  {
    path: '', 
    loadChildren: () => import('./template/template.module').then(m => m.TemplateModule),
    canActivate: [authGuard],
    data: { animation: 'template' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }