import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Starlink } from './starlinks.model';

@Injectable({
  providedIn: 'root',
})
export class SpaceXService {
  private baseUrl = 'https://api.spacexdata.com';

  constructor(private http: HttpClient) {}

  getStarlinkSats(): Observable<Starlink[]> {
    return this.http.get<Starlink[]>(`${this.baseUrl}/v4/starlink`);
  }
}
