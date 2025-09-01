import { Component, setTestabilityGetter } from '@angular/core';
import { Banner } from './banner/banner';
import { CommonModule } from '@angular/common';
import { AboutMe } from './about-me/about-me';
import { Watermark } from '../watermark/watermark';
import { Works } from './works/works';

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrl: './main.scss',
  imports: [CommonModule,Banner,AboutMe,Works]
})
export class Main {
  // ngAfterViewInit(){
  //   setTimeout(() => {
  //     const content = document.querySelector('.tagline-content');
  //     if(content){
  //       const contentDimesions = content.getBoundingClientRect();
  //       document.documentElement.style.setProperty('--contentH',`${contentDimesions.height + 20}px`);
  //       document.documentElement.style.setProperty('--contentW',`${contentDimesions.width + 5}px`);
  //     }
  //   })
  // }
}
