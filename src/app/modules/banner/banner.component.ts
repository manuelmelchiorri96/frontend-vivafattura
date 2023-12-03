import { Component, OnDestroy } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Subscription } from 'rxjs';
import { BannerService } from 'src/app/service/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition('void <=> *', animate(300)),
    ]),
    trigger('iconAnimation', [
      state(
        'void',
        style({
          transform: 'scale(0)',
        })
      ),
      state(
        '*',
        style({
          transform: 'scale(1)',
        })
      ),
      transition('void <=> *', animate('300ms ease-in-out')),
    ]),
  ],
})
export class BannerComponent implements OnDestroy {
  showBanner: boolean = false;
  message: string = '';
  isSuccess: boolean = false;
  isError: boolean = false;

  private bannerSubscription: Subscription;

  constructor(private bannerService: BannerService) {
    this.bannerSubscription = this.bannerService.bannerState$.subscribe(
      (state) => {
        this.showBanner = state.showBanner;
        this.message = state.message;
        this.isSuccess = state.isSuccess;
        this.isError = state.isError;
      }
    );
  }

  ngOnDestroy() {
    this.bannerSubscription.unsubscribe();
  }

  hideBanner() {
    this.bannerService.hideBanner();
  }
}
