import {Component, OnInit} from '@angular/core';
import {Cheque} from '../../model/cheque';
import {ChequeService} from '../../service/cheque.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-assign-form',
  templateUrl: './assign-form.component.html',
  styleUrls: ['./assign-form.component.css']
})
export class AssignFormComponent implements OnInit {

  cheque: Cheque;
  managers = [];

  constructor(private router: Router, private chequeService: ChequeService, private userService: UserService) {
    this.cheque = new Cheque();
    this.managers = this.branchManagers();
  }
  onSubmit() {
    console.log('reacjing here ' + this.cheque.prefix);
    this.chequeService.assign(this.cheque).subscribe(result => this.gotoChequeList());
  }

  gotoChequeList() {
    this.router.navigate(['/cheques']);
  }

  branchManagers(): Observable<User[]> {
    console.log(this.userService.findAll());
    return this.userService.findAll();
    // [
    //   {value: '1', name: 'Loan Officer'},
    //   {value: '2', name: 'Branch Manager'},
    //   {value: 'ADMIN', name: 'Admin'}
    // ];
  }

  ngOnInit() {
  }

}
