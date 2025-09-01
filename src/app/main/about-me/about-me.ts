import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Watermark } from '../../watermark/watermark';

@Component({
  selector: 'app-about-me',
  imports: [CommonModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  public lanceCollage: string = 'assets/images/lance_collage.png';
  public angularLogo: string = 'assets/logos/angular-logo.png';
  public typeScriptLogo: string = 'assets/logos/ts-logo-white.png';
  public ionicLogo: string = 'assets/logos/ionic-logo.png';
  public aspNetLogo: string = 'assets/logos/aspnet-logo.png';
  public htmlLogo: string = 'assets/logos/html5-logo-white.png';
  public cssLogo: string = 'assets/logos/css3-logo-white.png';
  public javaScriptLogo: string = 'assets/logos/js-logo-white.png';

  highlightLogo(key: string) {
    if (key == 'typescript') {
      this.typeScriptLogo = 'assets/logos/ts-logo1.png';
    } else if (key == 'html') {
      this.htmlLogo = 'assets/logos/html5-logo.png';
    } else if (key == 'css') {
      this.cssLogo = 'assets/logos/css3-logo.png';
    } else if (key == 'javascript') {
      this.javaScriptLogo = 'assets/logos/js-logo.png';
    }
  }

  unhighlightLogo(key: string) {
    if (key == 'typescript') {
      this.typeScriptLogo = 'assets/logos/ts-logo-white.png';
    } else if (key == 'html') {
      this.htmlLogo = 'assets/logos/html5-logo-white.png';
    } else if (key == 'css') {
      this.cssLogo = 'assets/logos/css3-logo-white.png';
    } else if (key == 'javascript') {
      this.javaScriptLogo = 'assets/logos/js-logo-white.png';
    }
  }
}
