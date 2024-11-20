import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <main>
      <app-header />
      <router-outlet />
    </main>
  `,
  styles: `
    main {
      line-height: 1.5;
      width: 50vw;
      margin: 0 auto;
      letter-spacing: 0.07em;
      padding: 30px 30px;
    }

    @media (max-width: 840px) {
      main {
        width: 70vw;
      }
      
    }

    @media(max-width: 600px) {
      main {
        width: fit-content;
      }
    }
  `
})
export class AppComponent {
  title = 'Min Soo Kang (강민수)';
  description = 'Min Soo\'s personal website.'
}
