import { Component } from '@angular/core';
import { Image } from '../types/image'
import { Section } from '../types/section'
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [DatePipe],
  template: `
    @for (section of sections; track section) {
      @if (section.title !== undefined) {
        <h4>{{section.title}}</h4>
      }
      <p>{{section.content}}</p>
      @if (section.lastUpdated !== undefined ) {
        <p>Last Updated: {{ section.lastUpdated | date }}</p>
      }
    }
  `,
  styles: ``
})
export class BioComponent {
  images: Image[] = []
  sections: Section[] = [
    {
      content: "I was born and raised in the Philippines, but I'm ethnically South Korean. I enjoy studying topics in theoretical computer science.",
    },
  ]
}
