import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import {ChequeFormComponent} from './component/cheque-form/cheque-form.component';
import {ChequeListComponent} from './component/cheque-list/cheque-list.component';
import {AssignFormComponent} from './component/assign-form/assign-form.component';
import {UserComponent} from './component/user/user.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'signup', component: UserFormComponent },
  { path: 'createcheque', component: ChequeFormComponent },
  { path: 'cheques', component: ChequeListComponent },
  {path: 'assign', component: AssignFormComponent},
  {path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
