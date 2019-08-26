import {Component, OnInit} from '@angular/core';
import {Cheque} from '../../model/cheque';
import {ChequeService} from '../../service/cheque.service';

@Component({
  selector: 'app-cheque-list',
  templateUrl: './cheque-list.component.html',
  styleUrls: ['./cheque-list.component.css']
})
export class ChequeListComponent implements OnInit {

  cheques: Cheque[];

  constructor(private chequeService: ChequeService) {
  }

  ngOnInit() {
    this.chequeService.findAll().subscribe(data => {
      this.cheques = data;
    });
  }

}
