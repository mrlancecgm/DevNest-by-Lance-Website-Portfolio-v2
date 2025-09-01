import { Component, EventEmitter, Output } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.html',
  styleUrl: './subheader.scss',
  standalone: false,
})
export class Subheader {
  @Output() clicked = new EventEmitter<number>();
  public subheaderItems: any[] = [
    { id: 1, description: 'HOME', isSelected: true },
    { id: 2, description: 'WORKS', isSelected: false },
    { id: 3, description: 'SERVICES', isSelected: false },
    { id: 4, description: 'CONTACT', isSelected: false },
  ];

  selectItem(id: number) {
    this.subheaderItems = this.subheaderItems.map((item: any) => {
      item.isSelected = item.id == id ? true : false;
      return item;
    });
    this.clicked.emit(id);
    feather.replace();
  }

  ngAfterViewChecked() {
    feather.replace();
  }
}
