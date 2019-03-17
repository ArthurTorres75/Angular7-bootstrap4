import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule
  ],
  exports: [ UserComponent ],
  providers: [
    UserService
  ]
})
export class UserModule { }
