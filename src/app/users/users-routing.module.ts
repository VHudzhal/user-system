import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../guards/auth/auth.guard';
import { UserDetailGuard } from '../guards/user-detail.guard'

import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: '', component: UsersComponent, canActivate: [AuthGuard]},
  { path: ':id', component: UserDetailComponent, canActivate: [AuthGuard, UserDetailGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
