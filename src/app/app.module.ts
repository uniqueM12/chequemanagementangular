import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { UserService } from './service/user.service';
import { ChequeFormComponent } from './component/cheque-form/cheque-form.component';
import { ChequeListComponent } from './component/cheque-list/cheque-list.component';
import {ChequeService} from './service/cheque.service';
import { AssignFormComponent } from './component/assign-form/assign-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    ChequeFormComponent,
    ChequeListComponent,
    AssignFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, ChequeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
