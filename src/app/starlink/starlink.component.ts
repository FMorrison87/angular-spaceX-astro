import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Starlink } from '../+state/starlinks.model';

import { AgGridAngular } from 'ag-grid-angular';
import { starlinkColDefs } from './starlink.columnDefs';
import { StarlinksStore } from '../+state/starlinks.store';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import '@astrouxds/ag-grid-theme/dist/main.css';

@Component({
  selector: 'app-starlink',
  standalone: true,
  imports: [AgGridAngular],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './starlink.component.html',
  styleUrl: './starlink.component.css',
})
export class StarlinkComponent implements OnInit {
  readonly starlinkStore = inject(StarlinksStore);
  starlinkCols: ColDef<Starlink>[] = starlinkColDefs;

  ngOnInit() {
    // check to see if signal store is populateds, if not, make request
    if (this.starlinkStore.starlinks().length === 0) {
      this.starlinkStore.loadAll();
    }
  }
}
