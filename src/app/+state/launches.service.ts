import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Launch } from './launch.model';

@Injectable({
  providedIn: 'root',
})
export class LaunchService {
  private baseUrl = 'https://api.spacexdata.com/v5';

  constructor(private http: HttpClient) {}

  getLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(`${this.baseUrl}/launches/latest`);
  }
}
