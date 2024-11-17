import { Component, inject, Input } from '@angular/core';
import { SpaceTrack } from '../+state/starlinks.model';
import { KeyValuePipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { StarlinksStore } from '../+state/starlinks.store';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-spacetrack',
  standalone: true,
  imports: [KeyValuePipe, RouterLinkActive, RouterLink, AgGridAngular],
  templateUrl: './spacetrack.component.html',
  styleUrl: './spacetrack.component.css',
})
export class SpacetrackComponent {
  readonly starlinksStore = inject(StarlinksStore);
  spaceTrack: SpaceTrack | undefined;
  starlinkId: string = '';
  spaceTrackCols = [{ headerName: 'Key' }, { headerName: 'Value' }];

  @Input()
  set id(id: string) {
    this.starlinkId = id;

    // look for in entity cache first
    // this.starlinksStore.starlinks$()
    //   .pipe(map((entityMap) => entityMap[id]))
    //   .subscribe((entity) => {
    //     this.spaceTrack = entity?.spaceTrack;
    //   });

    // if absent from entity cache (e.g. page refresh), make request
    if (this.spaceTrack === undefined) {
      this.starlinksStore.getOne(id);
    }
  }
}
