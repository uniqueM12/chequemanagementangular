import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
/*this the documentation*/
export class UserFormComponent implements OnInit {

  user: User;

  roles = [];

  myForm: FormGroup;


  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.user = new User();
    this.roles = this.availableRoles();
  }

  availableRoles() {
    return [
      { value: 'LOAN_OFFICER', name: 'Loan Officer' },
      { value: 'BRANCH_MANAGER', name: 'Branch Manager' },
      { value: 'ADMIN', name: 'Admin' }
    ];
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
  ngOnInit() {
  }

}
