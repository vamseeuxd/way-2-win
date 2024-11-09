import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonIcon,
  IonCardContent,
  IonText,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonList,
  IonItem,
  IonLabel, IonAvatar, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  user,
} from '@angular/fire/auth';
import { Router, RouterLink } from '@angular/router';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonAvatar,
    IonLabel,
    IonItem,
    IonList,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonText,
    IonCardContent,
    IonIcon,
    IonCard,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterLink,
  ],
})
export class LoginPage {
  auth = inject(Auth);
  user$ = user(this.auth);
  router = inject(Router);
  loaderService = inject(LoaderService);

  async login() {
    const loaderId = this.loaderService.show();
    const user = await signInWithPopup(this.auth, new GoogleAuthProvider());
    await this.router.navigate(['/home']);
    this.loaderService.hide(loaderId);
  }

  logout() {
    this.auth.signOut();
  }
}
