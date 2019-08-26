import {Injectable} from '@angular/core';
import {Cheque} from '../model/cheque';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChequeService {

  private createCheque: string;
  private listCheques: string;
  private assignCheque: string;

  constructor(private http: HttpClient) {
    this.createCheque = 'http://localhost:8080/createcheque';
    this.listCheques = 'http://localhost:8080/cheques';
    this.assignCheque = 'http://localhost:8080/assign';
  }

  public findAll(): Observable<Cheque[]> {
    return this.http.get<Cheque[]>(this.listCheques);
  }
  public save(cheque: Cheque) {
    cheque.branchManager = null;
    return this.http.post<Cheque>(this.createCheque, cheque);
  }

  public assign(cheque: Cheque) {
    return this.http.post<Cheque>(this.assignCheque, cheque);
  }
}
