import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }
  getByid(id: string | number) {
    return this.http.get(`${environment.apiUrl}/users/` + id);
  }
  update(user: User) {
    return this.http.put(`${environment.apiUrl}/users/` + user.id, user);
  }
  register(user: User) {
    return this.http.post(`${environment.apiUrl}/users`, user);
  }
  delete(id: string | number) {
    return this.http.delete(`${environment.apiUrl}/users/` + id);
  }
}
