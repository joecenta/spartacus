import { LayoutConfig } from '@spartacus/storefront';
import { StoreFinderConfig } from '@spartacus/core/store-finder';

export const defaultStoreFinderConfig: StoreFinderConfig | LayoutConfig = {
  googleMaps: {
    apiUrl: 'https://maps.googleapis.com/maps/api/js',
    apiKey: '',
    scale: 5,
    selectedMarkerScale: 17,
    radius: 50000,
  },
  layoutSlots: {
    StoreFinderPageTemplate: {
      slots: ['MiddleContent', 'SideContent'],
    },
  },
};
