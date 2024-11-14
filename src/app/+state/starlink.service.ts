import { Injectable } from '@angular/core';
import {
  EntityActionOptions,
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Starlink } from './starlinks.model';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class StarlinkService extends EntityCollectionServiceBase<Starlink> {
  private baseUrl = 'https://api.spacexdata.com';

  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private http: HttpClient
  ) {
    super('Starlink', serviceElementsFactory);
  }

  override getAll(): Observable<Starlink[]> {
    return this.http.get<Starlink[]>(`${this.baseUrl}/v4/starlink`).pipe(
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

  override getByKey(
    key: any,
    options?: EntityActionOptions
  ): Observable<Starlink> {
    return this.http.get<Starlink>(`${this.baseUrl}/v4/starlink/${key}`).pipe(
      switchMap((starlink) => {
        return of(starlink);
      }),
      catchError((error) => {
        console.error('Error fetching starlinks:', error);
        return of();
      })
    );
  }
}
