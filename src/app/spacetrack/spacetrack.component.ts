import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { SpaceTrack, Starlink } from '../+state/starlinks.model';
import { KeyValuePipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { StarlinksStore } from '../+state/starlinks.store';
import { AgGridAngular } from 'ag-grid-angular';
import { AstroComponentsModule } from '@astrouxds/angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-spacetrack',
  standalone: true,
  imports: [
    KeyValuePipe,
    RouterLinkActive,
    RouterLink,
    AgGridAngular,
    AstroComponentsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './spacetrack.component.html',
  styleUrl: './spacetrack.component.css',
})
export class SpacetrackComponent {
  readonly starlinksStore = inject(StarlinksStore);
  starlink: Starlink | undefined;
  starlinkId: string = '';
  spaceTrackCols: ColDef<any>[] = [
    { field: 'key', headerName: 'Key', flex: 1 },
    {
      field: 'value',
      headerName: 'Value',
      flex: 2,
      valueFormatter: (params) => {
        // Ensure all values are treated as strings for display
        return params.value !== null && params.value !== undefined
          ? params.value.toString()
          : '';
      },
    },
  ];

  @Input()
  set id(id: string) {
    this.starlinkId = id;

    // look for starlink in signal store first
    if (this.starlinksStore.starlinks().length === 0) {
      this.starlink = this.starlinksStore
        .starlinks()
        ?.find((starlink) => starlink.id === id);
    }

    // if absent from entity cache (e.g. page refresh), make request
    if (!this.starlink) {
      this.starlinksStore.getOne(id);
    }
  }
}
