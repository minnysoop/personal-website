import { Component } from '@angular/core';
import { Card } from '../types/card'

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [],
  template: `
    @for (work of works; track work) {
      <div class="card">
        <img class="card-image" src="{{work.image.url}}" alt="{{work.image.ariaText}}">
        <div class="card-content">
          <a href="{{work.link.path}}" target="_blank"><h2>{{work.title}}</h2></a>
          <p>{{work.description}}</p>
        </div>
      </div>
    }
  `,
  styles: `
    .card {
      background-color: #f4f4f4;
      border-radius: 8px; 
      display: flex;
      justify-content: space-between; 
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 16px;
      margin: 10px;
      min-width: 100%;
      flex-wrap: wrap;
      flex-direction: row;
    }

    .card-content {
      flex: 1;
      margin-right: 16px;
    }

    .card-content h2 {
      font-size: 1.2rem; 
      margin: 0; 
      font-weight: bold;
    }

    .card-content a {text-decoration: underline dotted;}
    .card-content a:visited {color: black;}
    .card-content a:hover {color: gray;}

    .card-content p {
      font-size: 1rem;
      color: #555;
      margin: 0;
    }

    .card-image {
      margin-right: 1.2em;
      max-width: 150px;
      height: auto; 
      flex-shrink: 0;
      object-fit: cover; 
      border-radius: 8px;
    }

    
  `
})
export class WorkComponent {
  works: Card[] = [
    {
      title: "project 1",
      description: "project used for this and that",
      image: {
        ariaText: "aria text and such",
        url: "https://placehold.co/600x400"
      },
      link: {
        path: "https://www.google.com/",
        title: "View"
      }
    }
  ]
}
