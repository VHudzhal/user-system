import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { UserService } from '../service/users/users.service';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    
  ]
})
export class LoginModule { }
