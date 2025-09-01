import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
  imports: [CommonModule]
})
export class Banner {
  public lanceBannerImg:string="assets/images/lance_banner_img.png";
  public lanceBannerStencilImg:string="assets/images/stencil_white.png";
}
