import { Injectable } from '@angular/core';
import { Starlink } from './starlinks.model';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class StarlinksService {
  private baseUrl = 'https://api.spacexdata.com';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Starlink[]> {
    return this.http.get<Starlink[]>(`${this.baseUrl}/v4/starlink`);
  }

  // getAll(): Observable<Starlink[]> {
  //   return this.http.get<Starlink[]>(`${this.baseUrl}/v4/starlink`).pipe(
  //     switchMap((starlinks) => {
  //       // Update the store with the fetched entities
  //       this.upsertManyInCache(starlinks);
  //       return of(starlinks);
  //     }),
  //     catchError((error) => {
  //       console.error('Error fetching starlinks:', error);
  //       return of([]);
  //     })
  //   );
  // }

  getById(id: string): Observable<Starlink> {
    return this.http.get<Starlink>(`${this.baseUrl}/v4/starlink/${id}`);
  }

  // override getByKey(
  //   key: any,
  //   options?: EntityActionOptions
  // ): Observable<Starlink> {
  //   return this.http.get<Starlink>(`${this.baseUrl}/v4/starlink/${key}`).pipe(
  //     switchMap((starlink) => {
  //       return of(starlink);
  //     }),
  //     catchError((error) => {
  //       console.error('Error fetching starlinks:', error);
  //       return of();
  //     })
  //   );
  // }
}
