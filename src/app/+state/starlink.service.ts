import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Starlink } from './starlinks.model';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class StarlinkService extends EntityCollectionServiceBase<Starlink> {
  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private http: HttpClient
  ) {
    super('Starlink', serviceElementsFactory);
  }

  override getAll(): Observable<Starlink[]> {
    const baseUrl = 'https://api.spacexdata.com';

    return this.http.get<Starlink[]>(`${baseUrl}/v4/starlink`).pipe(
      switchMap((starlinks) => {
        // Update the store with the fetched entities
        this.upsertManyInCache(starlinks);
        return of(starlinks);
      }),
      catchError((error) => {
        console.error('Error fetching starlinks:', error);
        return of([]);
      })
    );
  }
}
