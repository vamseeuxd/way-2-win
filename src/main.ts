import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
  withHashLocation,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { isDevMode } from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      withHashLocation()
    ),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyCbmQYYtszEBPIGJQ6_WW0dXjRMjKMyj40',
        authDomain: 'way02win.firebaseapp.com',
        projectId: 'way02win',
        storageBucket: 'way02win.firebasestorage.app',
        messagingSenderId: '887064911289',
        appId: '1:887064911289:web:6febe20b3bece1205cea68',
      })
    ),
    provideAuth(() => getAuth()),
    {
      provide: FIREBASE_OPTIONS,
      useValue: {
        apiKey: 'AIzaSyCbmQYYtszEBPIGJQ6_WW0dXjRMjKMyj40',
        authDomain: 'way02win.firebaseapp.com',
        projectId: 'way02win',
        storageBucket: 'way02win.firebasestorage.app',
        messagingSenderId: '887064911289',
        appId: '1:887064911289:web:6febe20b3bece1205cea68',
      },
    },
    provideFirestore(() => getFirestore()),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
});
