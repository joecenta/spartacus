import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideDefaultConfig } from '@spartacus/core';
import { defaultStoreFinderConfig } from './default-store-finder-config';

@NgModule({
  declarations: [],
  providers: [provideDefaultConfig(defaultStoreFinderConfig)],
  imports: [CommonModule],
})
export class StoreFinderRootModule {}
