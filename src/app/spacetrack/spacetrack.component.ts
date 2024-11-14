import { Component, inject, Input } from '@angular/core';
import { StarlinkService } from '../+state/starlink.service';
import { SpaceTrack } from '../+state/starlinks.model';
import { KeyValuePipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { map } from 'rxjs';

@Component({
  selector: 'app-spacetrack',
  standalone: true,
  imports: [
    KeyValuePipe,
    TableModule,
    ButtonModule,
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './spacetrack.component.html',
  styleUrl: './spacetrack.component.css',
})
export class SpacetrackComponent {
  private starlinkService = inject(StarlinkService);
  spaceTrack: SpaceTrack | undefined;
  starlinkId: string = '';
  spaceTrackCols = [{ header: 'Key' }, { header: 'Value' }];

  @Input()
  set id(id: string) {
    this.starlinkId = id;

    // look for in entity cache first
    this.starlinkService.entityMap$
      .pipe(map((entityMap) => entityMap[id]))
      .subscribe((entity) => {
        this.spaceTrack = entity?.spaceTrack;
      });

    // if absent from entity cache (e.g. page refresh), make request
    if (this.spaceTrack === undefined) {
      this.starlinkService.getByKey(id).subscribe((starlink) => {
        this.spaceTrack = starlink.spaceTrack;
      });
    }
  }
}
