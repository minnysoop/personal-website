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
      margin-left: auto;
      margin-right: auto;
      width: 70vw;
      line-height: 1.5;
    }
  `
})
export class AppComponent {
  title = 'Min Soo Kang (강민수)';
  description = 'Min Soo\'s personal website.'
}
