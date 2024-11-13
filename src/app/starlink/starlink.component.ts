import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Starlink } from '../+state/starlinks.model';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {
  Column,
  spaceTrackColDefs,
  starlinkColDefs,
} from './starlink.columnDefs';
import { StarlinkService } from '../+state/starlink.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-starlink',
  standalone: true,
  imports: [TableModule, ButtonModule, AsyncPipe],
  templateUrl: './starlink.component.html',
  styleUrl: './starlink.component.css',
})
export class StarlinkComponent implements OnInit {
  private starlinkService = inject(StarlinkService);
  private destroyRef = inject(DestroyRef);

  loading$: Observable<boolean> = this.starlinkService.loading$;
  starlinks$: Observable<Starlink[]> = this.starlinkService.entities$;
  starlinkCols: Column[] = starlinkColDefs;
  spaceTrackCols: Column[] = spaceTrackColDefs;

  ngOnInit() {
    this.starlinkService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }
}
