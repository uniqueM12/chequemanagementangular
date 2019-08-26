import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private listUsers: string;
  private addUser: string;
  private getUser: string;

  constructor(private http: HttpClient) {
    this.listUsers = 'http://localhost:8080/users';
    this.addUser = 'http://localhost:8080/signup';
    this.getUser = 'http://localhost:8080/user';
  }
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.listUsers);
  }
  public getUserById(id: string) {
    return this.http.post<User>(this.getUser, id);
  }
  public save(user: User) {
    return this.http.post<User>(this.addUser, user);
  }
}
