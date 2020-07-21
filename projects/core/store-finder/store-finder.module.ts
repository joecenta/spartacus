import { Injector, NgModule } from '@angular/core';
import { StoreFinderStoreModule } from './store/store-finder-store.module';
import { StoreFinderOccModule } from './occ/index';
import { StoreFinderConnector } from './connectors/store-finder.connector';

@NgModule({
  imports: [StoreFinderStoreModule, StoreFinderOccModule],
  providers: [StoreFinderConnector],
})
export class StoreFinderCoreModule {
  constructor(public injector: Injector) {
    console.log('StoreFinderCoreModule constructed.');
  }
}

console.log('StoreFinderCoreModule loaded.');
