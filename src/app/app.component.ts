import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AuthService } from './auth/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shoppingListApp';

  constructor(
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId
  ) {}
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // dispatch here, only in browser (so session storage can work in SSR)
      this.authService.autoLogin();
    }
  }
}
