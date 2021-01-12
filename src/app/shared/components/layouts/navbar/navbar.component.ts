import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuHidden = false;
  menuOpen: boolean = true;


  constructor() {
   }

  ngOnInit(): void {
  }
  show(){
this.menuOpen = !this.menuOpen
  }
  
  toggle() {
    this.menuHidden = !this.menuHidden;
  }


}
