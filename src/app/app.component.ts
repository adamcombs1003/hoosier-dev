import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-template';
  @ViewChild('body') bodyRef!: ElementRef;

  toggleTheme(){
    this.bodyRef.nativeElement.classList.toggle('dark-theme');
    this.bodyRef.nativeElement.classList.toggle('light-theme');
  }

}