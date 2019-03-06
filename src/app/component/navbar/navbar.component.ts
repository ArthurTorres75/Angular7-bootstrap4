import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  isCollapsed = true;
  ngOnInit() {
  }
  toggleSidebarPin() {
    // this.appService.toggleSidebarPin();
  }
  toggleSidebar() {
    // this.appService.toggleSidebar();
}
}
