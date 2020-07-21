import { Injector, NgModule } from '@angular/core';
import { provideDefaultConfig } from '@spartacus/core';
import { defaultStoreFinderConfig } from './config/default-store-finder-config';
import { StoreFinderStoreModule } from './store/store-finder-store.module';
import { StoreFinderOccModule } from './occ/index';
import { StoreFinderConnector } from './connectors/store-finder.connector';

@NgModule({
  imports: [StoreFinderStoreModule, StoreFinderOccModule],
  providers: [
    provideDefaultConfig(defaultStoreFinderConfig),
    StoreFinderConnector,
  ],
})
export class StoreFinderCoreModule {
  constructor(public injector: Injector) {
    console.log('StoreFinderCoreModule constructed.');
  }
}

console.log('StoreFinderCoreModule loaded.');
