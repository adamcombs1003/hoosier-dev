import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private bottomSheet: MatBottomSheet){}

  @ViewChild('body') bodyRef!: ElementRef;

  openBottomSheetMenu() {
    this.bottomSheet.open(BottomSheetComponent);
  }

  toggleTheme() {
    this.bodyRef.nativeElement.classList.toggle('dark-theme');
    this.bodyRef.nativeElement.classList.toggle('light-theme');
  }

}