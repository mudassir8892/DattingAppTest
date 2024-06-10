import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideToastr, ToastrService } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

const serverConfig: ApplicationConfig = {
  providers: [
    //provideAnimations(),
    provideServerRendering(),
    //   provideToastr({
    //     positionClass: 'toast-bottom-right',
    //   }),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
