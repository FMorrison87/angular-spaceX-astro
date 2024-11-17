import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Starlink } from './starlinks.model';
import { StarlinksService } from './starlink.service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

type StarlinksState = {
  starlinks$: Observable<Starlink[]> | null;
  starlink$: Observable<Starlink> | null;
  isLoadingAll: boolean;
  isLoadingSpacetrack: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: StarlinksState = {
  starlinks$: null,
  starlink$: null,
  isLoadingAll: false,
  isLoadingSpacetrack: false,
  filter: { query: '', order: 'asc' },
};

export const StarlinksStore = signalStore(
  withState(initialState),
  withMethods((store, starlinksService = inject(StarlinksService)) => ({
    async loadAll(): Promise<void> {
      patchState(store, { isLoadingAll: true });

      const starlinks$ = await starlinksService.getAll();
      patchState(store, { starlinks$, isLoadingAll: false });
    },

    async getOne(id: string): Promise<void> {
      patchState(store, { isLoadingSpacetrack: true });

      const starlink$ = await starlinksService.getById(id);
      patchState(store, { starlink$, isLoadingSpacetrack: false });
    },
  }))
);
