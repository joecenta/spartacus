import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeJa from '@angular/common/locales/ja';
import localeZh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ConfigModule, TestConfigModule } from '@spartacus/core';
import {
  JsonLdBuilderModule,
  StorefrontComponent,
} from '@spartacus/storefront';
import { b2bFeature } from '../environments/b2b/b2b.feature';
import { b2cFeature } from '../environments/b2c/b2c.feature';
import { cdsFeature } from '../environments/cds/cds.feature';
import { environment } from '../environments/environment';
import { TestOutletModule } from '../test-outlets/test-outlet.module';

registerLocaleData(localeDe);
registerLocaleData(localeJa);
registerLocaleData(localeZh);

const devImports = [];
if (!environment.production) {
  devImports.push(StoreDevtoolsModule.instrument());
}

let additionalImports = [];

if (environment.cds) {
  additionalImports = [...additionalImports, ...cdsFeature.imports];
}

if (environment.b2b) {
  additionalImports = [...additionalImports, ...b2bFeature.imports];
} else {
  additionalImports = [...additionalImports, ...b2cFeature.imports];
}

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'spartacus-app' }),
    BrowserTransferStateModule,
    JsonLdBuilderModule,
    ...additionalImports,
    TestOutletModule, // custom usages of cxOutletRef only for e2e testing
    TestConfigModule.forRoot({ cookie: 'cxConfigE2E' }), // Injects config dynamically from e2e tests. Should be imported after other config modules.

    ConfigModule.withConfig({
      layoutSlots: {
        StoreFinderPageTemplate: {
          slots: ['MiddleContent', 'SideContent'],
        },
      },

      featureModules: {
        storeFinder: {
          module: () =>
            import('@spartacus/storefront/storefinder').then(
              (m) => m.StoreFinderModule
            ),
          dependencies: [
            () =>
              import('@spartacus/core/store-finder').then(
                (m) => m.StoreFinderCoreModule
              ),
          ],
          cmsComponents: ['StoreFinderComponent'],
        },
        banners: {
          module: () =>
            import('@spartacus/storefront/banner').then((m) => m.BannerModule),
          // dependencies: [
          //   () =>
          //     import('@spartacus/core/store-finder').then(
          //       (m) => m.StoreFinderCoreModule
          //     ),
          // ],
          cmsComponents: [
            'SimpleResponsiveBannerComponent',
            'BannerComponent',
            'SimpleBannerComponent',
          ],
        },
      },

      // cmsComponents: {
      //   SimpleResponsiveBannerComponent: {
      //     component: () =>
      //       import('@spartacus/storefront/banner').then(
      //         (m) => m.BannerComponent
      //       ),
      //   },
      //   BannerComponent: {
      //     component: () =>
      //       import('@spartacus/storefront/banner').then(
      //         (m) => m.BannerComponent
      //       ),
      //   },
      //   SimpleBannerComponent: {
      //     component: () =>
      //       import('@spartacus/storefront/banner').then(
      //         (m) => m.BannerComponent
      //       ),
      //   },
      // },
    }),

    ...devImports,
  ],

  bootstrap: [StorefrontComponent],
})
export class AppModule {}
