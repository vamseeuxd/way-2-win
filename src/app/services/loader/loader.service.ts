import { inject, Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  loadingCtrl = inject(LoadingController);

  loaders: number[] = [];
  loading: HTMLIonLoadingElement | undefined;
  constructor() {
    this.initLoader();
  }

  async initLoader() {
    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...',
    });
  }

  show(): number {
    const id = new Date().getTime();
    this.loaders.push(id);
    this.updateLoader();
    return id;
  }
  hide(id: number) {
    if (this.loaders.includes(id)) {
      this.loaders.splice(this.loaders.indexOf(id), 1);
      this.updateLoader();
    }
  }
  async updateLoader() {
    if (this.loaders.length > 0) {
      this.loading?.present();
    } else {
      this.loading?.dismiss();
    }
  }
}
