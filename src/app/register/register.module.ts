import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserService } from '../user/user.service';
import { fakeBackendProvider } from '../helpers/fake-backend';
import { JwtInterceptor } from '../helpers/jwt.interceptor';
import { ErrorInterceptor } from '../helpers/error.interceptor';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule
  ],
  exports: [ RegisterComponent ],
  providers: [
     UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
     fakeBackendProvider
    ]
})
export class RegisterModule { }
