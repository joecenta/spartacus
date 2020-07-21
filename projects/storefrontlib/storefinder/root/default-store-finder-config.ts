import { LayoutConfig } from '@spartacus/storefront';
import { StoreFinderConfig } from '@spartacus/core/store-finder';
import { OccConfig } from '@spartacus/core';

export const defaultStoreFinderConfig:
  | StoreFinderConfig
  | LayoutConfig
  | OccConfig = {
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
  backend: {
    occ: {
      endpoints: {
        store: 'stores/${storeId}?fields=FULL',
        stores:
          'stores?fields=stores(name,displayName,formattedDistance,openingHours(weekDayOpeningList(FULL),specialDayOpeningList(FULL)),geoPoint(latitude,longitude),address(line1,line2,town,region(FULL),postalCode,phone,country,email), features),pagination(DEFAULT),sorts(DEFAULT)',
        storescounts: 'stores/storescounts',
      },
    },
  },
};
