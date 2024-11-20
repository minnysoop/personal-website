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
      background: #f0ece2;
      border-radius: 8px;
      padding: 10px;
      display: flex;
      justify-content: space-between; 
      margin-bottom: 25px;
      min-width: 100%;
      flex-wrap: wrap;
      flex-direction: row;
    }

    .card-content {
      flex: 1;
      margin-right: 16px;
    }

    .card-content h2 {
      font-size: 1rem; 
      margin: 0; 
      font-weight: bold;
    }

    .card-content a {text-decoration: underline dotted;}
    .card-content a:visited {color: black;}
    .card-content a:hover {color: gray;}

    .card-content p {
      font-size: 0.8rem;
      color: #555;
      margin: 0;
    }

    .card-image {
      margin-right: 1.2em;
      max-height: auto;
      max-width: 150px;
      flex-shrink: 0;
      object-fit: cover;
      border-radius: 8px;
    }

    @media (max-width: 950px) {
      .card {
        flex-direction: column;
      }

      .card-content {
        margin-right: 0;
      }

      .card-image {
        margin-right: 0;
        margin-bottom: 0.2em;
        max-width: 100%;
      }
    }
  `
})
export class WorkComponent {
  works: Card[] = [
    // {
    //   title: "project 1",
    //   description: "project used for this and that. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //   image: {
    //     ariaText: "aria text and such",
    //     url: "https://placehold.co/600x400"
    //   },
    //   link: {
    //     path: "https://www.google.com/",
    //     title: "View"
    //   }
    // },
  ]
}
