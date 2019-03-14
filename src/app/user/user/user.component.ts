import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  subject: User;
  users: User[] = [];
  constructor(private toastr: ToastrService, private userService: UserService) { }

  ngOnInit() {
    this.loadAllusers();
  }
  private loadAllusers() {
    this.userService.getAll().pipe(first()).subscribe(users => { this.users = users; });
  }
}
