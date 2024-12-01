import { Component } from '@angular/core';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [],
  template: `
    <div>
      <p>I was born and raised in the Philippines, but I'm ethnically South Korean. I enjoy studying topics in theoretical computer science.</p>
    </div>
    <div>
      <p><b>Education</b></p>
      <table>
        <tbody>
          <tr>
            <td><span>2025-2027</span></td>
            <td>University of Sydney, Master's in Computer Science</td>
          </tr>
          <tr>
            <td><span>2019-2024</span></td>
            <td>Northeastern University, Bachelor's in Information Technology</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <p><b>Honors and Awards</b></p>
      <table>
        <tbody>
        <tr>
          <td><span>2025-2027</span></td>
          <td>International Student Award, University of Sydney</td>
        </tr>
        <tr>
          <td><span>2020</span></td>
          <td>Honors Early Research Award, Northeastern University</td>
        </tr>
        <tr>
          <td><span>2019-2024</span></td>
          <td>Honors Academic Scholarship, Northeastern University</td>
        </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: `
    * {
      padding: 0;
      margin: 0;
    }
    div {
      margin: 10px 0;
    }
    span {
      padding-right: 10px;
      color: gray;
    }
  `
})
export class BioComponent {}
