import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  menuClassName: string = 'dropdown-menu';
  isOpenProfile: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu () {
    this.menuClassName = this.menuClassName === 'dropdown-menu' ? 'dropdown-menu show' : 'dropdown-menu';
  }

  openProfile () {
    this.isOpenProfile = !this.isOpenProfile;
  }
}
