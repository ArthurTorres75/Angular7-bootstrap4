import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user/user.component';
import { AppComponent } from './app.component';
import { InitComponent } from './home/init/init.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './auth/guards/authguard';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    children: []
  },
  {
    path: 'init',
    component: InitComponent,
    canActivate: [ AuthGuard ],
    children: [
      {
        path: 'users',
        component: UserComponent,
        outlet: 'principal'
      },
    ]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: 'login',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
