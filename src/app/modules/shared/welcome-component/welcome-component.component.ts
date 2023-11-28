import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-welcome-component',
  templateUrl: './welcome-component.component.html',
  styleUrls: ['./welcome-component.component.css'],
})
export class WelcomeComponentComponent {
  imageUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.imageUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/bg-home.svg');
  }
}
