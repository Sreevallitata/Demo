import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    '.background {background: coral; color: white}',
    'li a { color: white}',
    'ul.nav a:hover { color: black  }'
  ]
})
export class HeaderComponent {
  constructor() {}

  }
