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
  managers: User[];
  cheques: Cheque[];

  constructor(private router: Router, private chequeService: ChequeService, private userService: UserService) {
    this.cheque = new Cheque();
    // this.managers = this.branchManagers();
    // this.cheques = this.availableCheques();
  }
  onSubmit() {
    this.chequeService.assign(this.cheque).subscribe(result => this.gotoChequeList());
  }

  gotoChequeList() {
    this.router.navigate(['/cheques']);
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.managers = data;
    });
    this.chequeService.findUnassigned().subscribe(data => {
      this.cheques = data;
    });
  }

}
