import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuHidden = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
    this.menuHidden = !this.menuHidden;
  }
}
