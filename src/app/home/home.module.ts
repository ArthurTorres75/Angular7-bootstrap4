import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitComponent } from './init/init.component';
import { ComponentModule } from '../component/component.module';
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [InitComponent],
  imports: [
    CommonModule,
    ComponentModule,
    UserModule
  ],
  exports: [ InitComponent ]
})
export class HomeModule { }
