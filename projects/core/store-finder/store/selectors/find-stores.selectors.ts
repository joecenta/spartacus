import { createSelector, MemoizedSelector } from '@ngrx/store';
import { StateUtils } from '@spartacus/core';
import { FindStoresState, StateWithStoreFinder, StoresState } from '../store-finder-state';
import { getStoreFinderState } from './feature.selector';

export const getFindStoresState: MemoizedSelector<
  StateWithStoreFinder,
  StateUtils.LoaderState<FindStoresState>
> = createSelector(
  getStoreFinderState,
  (storesState: StoresState) => storesState.findStores
);

export const getFindStoresEntities: MemoizedSelector<
  StateWithStoreFinder,
  FindStoresState
> = createSelector(getFindStoresState, (state) =>
  StateUtils.loaderValueSelector(state)
);

export const getStoresLoading: MemoizedSelector<
  StateWithStoreFinder,
  boolean
> = createSelector(getFindStoresState, (state) =>
  StateUtils.loaderLoadingSelector(state)
);
