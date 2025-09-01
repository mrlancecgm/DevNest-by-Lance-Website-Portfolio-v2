import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone: false
})
export class Header {
  public devNestByLanceIcon:string='assets/icons/devnest-by-lance-icon.jpg';
}
