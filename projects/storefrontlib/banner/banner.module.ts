import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsConfig, provideDefaultConfig } from '@spartacus/core';
import { GenericLinkModule } from '@spartacus/storefront';
import { MediaModule } from '@spartacus/storefront';;
import { BannerComponent } from './banner.component';

@NgModule({
  imports: [CommonModule, RouterModule, GenericLinkModule, MediaModule],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: BannerComponent,
        },
        BannerComponent: {
          component: BannerComponent,
        },
        SimpleBannerComponent: {
          component: BannerComponent,
        },
      },
    }),
  ],
  declarations: [BannerComponent],
  entryComponents: [BannerComponent],
  exports: [BannerComponent],
})
export class BannerModule {}
