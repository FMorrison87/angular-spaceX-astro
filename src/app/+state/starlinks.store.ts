import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Starlink } from './starlinks.model';
import { StarlinksService } from './starlink.service';
import { inject } from '@angular/core';

type StarlinksState = {
  starlinks: Starlink[];
  starlink: Starlink | null;
  isLoadingAll: boolean;
  isLoadingSpacetrack: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: StarlinksState = {
  starlinks: [],
  starlink: null,
  isLoadingAll: false,
  isLoadingSpacetrack: false,
  filter: { query: '', order: 'asc' },
};

export const StarlinksStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, starlinksService = inject(StarlinksService)) => ({
    async loadAll(): Promise<void> {
      patchState(store, { isLoadingAll: true });

      let starlinks: Starlink[] = [];
      starlinksService.getAll().subscribe((res) => {
        starlinks = res;
        patchState(store, { starlinks, isLoadingAll: false });
      });
    },

    async getOne(id: string): Promise<void> {
      patchState(store, { isLoadingSpacetrack: true });

      let starlink;
      starlinksService.getById(id).subscribe((res) => {
        starlink = res;
        patchState(store, { starlink, isLoadingSpacetrack: false });
      });
    },
  }))
);
