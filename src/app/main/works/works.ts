import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-works',
  imports: [CommonModule],
  templateUrl: './works.html',
  styleUrl: './works.scss',
})
export class Works {
  public openingAngle: string = '<';
  public closingAngle: string = '>';

  setStyleProperties() {
    setTimeout(() => {
      const referenceDiv = document.getElementById('reference-div');
      if (referenceDiv) {
        const fontSize = referenceDiv.getBoundingClientRect().height;
        console.log('Font Size: ', fontSize);
        document.documentElement.style.setProperty('--devnestIconH',`${fontSize-20.6}px`);
      }
    });
  }

  ngAfterViewInit() {
    this.setStyleProperties();
  }

  ngAfterViewChecked() {
    feather.replace();
  }
}
