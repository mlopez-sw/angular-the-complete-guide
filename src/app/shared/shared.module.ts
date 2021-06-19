import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { PreloaderComponent } from './preloader/preloader.component';

@NgModule({
  declarations: [PreloaderComponent, AlertComponent],
  imports: [CommonModule],
  exports: [PreloaderComponent, CommonModule, AlertComponent],
})
export class SharedModule {}
