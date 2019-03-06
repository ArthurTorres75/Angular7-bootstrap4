import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }
  showSuccessU() {
    this.toastr.success('hola');
  }
}
