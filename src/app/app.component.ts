import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 7';
  constructor(private toastr: ToastrService) {
  }
  showSuccess() {
    this.toastr.success('Mundo cruel', 'Hola');
  }
  showInfo() {
    this.toastr.info('Mundo cruel', 'Hola');
  }
  showWarning() {
    this.toastr.warning('Mundo cruel', 'Hola');
  }
  showError() {
    this.toastr.error('Mundo cruel', 'Hola');
  }
}
