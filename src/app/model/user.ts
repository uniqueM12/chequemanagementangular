import {Cheque} from './cheque';
export class User {

  id: string;
  username: string;
  password: string;
  branch: string;
  role: string;
  cheques: Cheque[];

  constructor() {
    this.id = '';
    this.username = '';
    this.password = '';
    this.branch = '';
    this.role = '';
  }
}
