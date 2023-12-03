import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  private bannerState = new BehaviorSubject<BannerState>({
    showBanner: false,
    message: '',
    isSuccess: false,
    isError: false,
  });

  bannerState$ = this.bannerState.asObservable();

  showSuccessBanner(message: string) {
    this.bannerState.next({
      showBanner: true,
      message,
      isSuccess: true,
      isError: false,
    });
  }

  showErrorBanner(message: string) {
    this.bannerState.next({
      showBanner: true,
      message,
      isSuccess: false,
      isError: true,
    });
  }

  hideBanner() {
    this.bannerState.next({
      showBanner: false,
      message: '',
      isSuccess: false,
      isError: false,
    });
  }
}

interface BannerState {
  showBanner: boolean;
  message: string;
  isSuccess: boolean;
  isError: boolean;
}
