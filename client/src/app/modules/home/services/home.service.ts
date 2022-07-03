import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HomeService {

  rootURL = '/api';

  constructor(private readonly http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get(this.rootURL + '/users');
  }

  addUser(user: any): Observable<any> {
    return this.http.post(this.rootURL + '/user', {user});
  }

}
