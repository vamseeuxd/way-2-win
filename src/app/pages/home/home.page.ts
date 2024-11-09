import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonNavLink, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons,
    RouterLinkWithHref,
    IonNavLink,
    IonLabel,
    IonItem,
    IonList,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
  ],
})
export class HomePage implements OnInit {
  constructor() {}
  ngOnInit() {
    history.pushState(null, '', window.location.href);
  }
}
