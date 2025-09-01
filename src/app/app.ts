import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutModule } from './layout/layout-module';
import { Watermark } from './watermark/watermark';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutModule, Watermark],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('DevNest-by-Lance-Website-Portfolio-v2');

  handle(evt: any) {
    console.log('EVT: ', evt);
    setTimeout(() => {
      const scrollIntoView = (id: string) => {
        const el = document.getElementById(id);
        console.log('El: ', el);
        if (el) {
          el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }
        console.log('El: ', el);
      };

      switch (evt) {
        case 1:
          console.log('Home');
          scrollIntoView('home-section');
          break;
        case 2:
          console.log('Work');
          scrollIntoView('work-section');
          break;
        case 3:
          console.log('Services');
          break;
        case 4:
          console.log('Contact');
          break;
      }
    });
  }
}
