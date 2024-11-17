import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { Starlink } from '../+state/starlinks.model';

import { AgGridAngular } from 'ag-grid-angular';
import { starlinkColDefs } from './starlink.columnDefs';
import { AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { StarlinksStore } from '../+state/starlinks.store';
import { RuxButton } from '@astrouxds/angular';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import '@astrouxds/ag-grid-theme/dist/main.css';

@Component({
  selector: 'app-starlink',
  standalone: true,
  imports: [AsyncPipe, RouterLink, RouterLinkActive, AgGridAngular],
  providers: [StarlinksStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './starlink.component.html',
  styleUrl: './starlink.component.css',
})
export class StarlinkComponent implements OnInit {
  readonly starlinkStore = inject(StarlinksStore);
  // private starlinkService = inject(StarlinkService);
  // private destroyRef = inject(DestroyRef);

  // loading$: Observable<boolean> = this.starlinkService.loading$;
  // starlinks$: Observable<Starlink[]> = this.starlinkService.entities$;
  starlinkCols: ColDef<Starlink>[] = starlinkColDefs;

  ngOnInit() {
    // check to see if entity cache is populates, if not, make request
    this.starlinkStore.loadAll();
    // this.starlinkService.entities$
    //   .pipe(
    //     tap((entities) => {
    //       if (entities.length === 0) {
    //         this.starlinkService
    //           .getAll()
    //           .pipe(takeUntilDestroyed(this.destroyRef))
    //           .subscribe();
    //       }
    //     })
    //   )
    //   .subscribe();
  }
}
