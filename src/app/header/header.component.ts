import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'
import { Link } from '../types/link'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <p>Min Soo Kang</p>

    <ul>
      @for (link of links; track link) {
        <li><a routerLink="{{link.path}}">{{link.title}}</a></li>
      }
    </ul>
  `,
  styles: `
    ul {
      padding: 0;
      width: 80px;
      list-style-type: none;
      display: flex;
      justify-content: space-between;
    }

    a {color: black;}

    a:visited {color: black;}
    a:hover {color: gray;}
    p {font-size: 1.2em;}
  
  `
})
export class HeaderComponent {
  links: Link[] = [
    {
      path: '/',
      title: 'Bio'
    },
    {
      path: '/work',
      title: 'Work'
    }
  ]
}
