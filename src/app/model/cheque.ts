import {User} from './user';

export class Cheque {
  id: string;
  bankName: string;
  prefix: string;
  suffix: string;
  branchManager: User;
  constructor() {
    this.id = '';
    this.bankName = '';
    this.prefix = '';
    this.suffix = '';
    this.branchManager = new User();
  }
}
