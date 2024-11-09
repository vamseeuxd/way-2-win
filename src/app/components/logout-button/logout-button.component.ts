import {
  Component,
  HostBinding,
  HostListener,
  inject,
  OnInit,
} from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { IonLabel, IonItem } from '@ionic/angular/standalone';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-logout-button',
  standalone: true,
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss'],
  imports: [IonItem, IonLabel],
})
export class LogoutButtonComponent {
  auth = inject(Auth);
  user$ = user(this.auth);
  router = inject(Router);
  loaderService = inject(LoaderService);
  @HostBinding('style.display') display = 'inline-block';
  @HostListener('click')
  async onClick() {
    const loaderId = this.loaderService.show();
    await this.auth.signOut();
    await this.router.navigate(['/login']);
    this.loaderService.hide(loaderId);
  }
  constructor() {
    this.user$.subscribe((user) => {
      if (user) {
        this.display = 'inline-block';
      } else {
        this.display = 'none';
      }
    });
  }
}
