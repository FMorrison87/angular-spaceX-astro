import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Starlink } from '../+state/starlinks.model';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Column, starlinkColDefs } from './starlink.columnDefs';
import { StarlinkService } from '../+state/starlink.service';
import { Observable, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-starlink',
  standalone: true,
  imports: [TableModule, ButtonModule, AsyncPipe, RouterLink, RouterLinkActive],
  templateUrl: './starlink.component.html',
  styleUrl: './starlink.component.css',
})
export class StarlinkComponent implements OnInit {
  private starlinkService = inject(StarlinkService);
  private destroyRef = inject(DestroyRef);

  loading$: Observable<boolean> = this.starlinkService.loading$;
  starlinks$: Observable<Starlink[]> = this.starlinkService.entities$;
  starlinkCols: Column[] = starlinkColDefs;

  ngOnInit() {
    // check to see if entity cache is populates, if not, make request
    this.starlinkService.entities$
      .pipe(
        tap((entities) => {
          if (entities.length === 0) {
            this.starlinkService
              .getAll()
              .pipe(takeUntilDestroyed(this.destroyRef))
              .subscribe();
          }
        })
      )
      .subscribe();
  }
}
