import { Component, OnInit } from '@angular/core';
import {Cheque} from '../../model/cheque';
import {ActivatedRoute, Router} from '@angular/router';
import {ChequeService} from '../../service/cheque.service';

@Component({
  selector: 'app-cheque-form',
  templateUrl: './cheque-form.component.html',
  styleUrls: ['./cheque-form.component.css']
})
export class ChequeFormComponent implements OnInit {

  cheque: Cheque;

  constructor(private route: ActivatedRoute, private router: Router, private chequeService: ChequeService) {
    this.cheque = new Cheque();
  }

  onSubmit() {
    this.chequeService.save(this.cheque).subscribe(result => this.gotoChequeList());
  }

  gotoChequeList() {
    this.router.navigate(['/cheques']);
  }
  ngOnInit() {
  }

}
