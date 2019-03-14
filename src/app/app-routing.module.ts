import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user/user.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { InitComponent } from './home/init/init.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    children: []
  },
  {
    path: 'init',
    component: InitComponent,
    canActivate: [],
    children: [
      {
        path: 'users',
        component: UserComponent,
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
