import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../+state/spacex.service';
import { Starlink } from '../+state/starlinks.model';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {
  Column,
  spaceTrackColDefs,
  starlinkColDefs,
} from './starlink.columnDefs';

@Component({
  selector: 'app-starlink',
  standalone: true,
  imports: [TableModule, ButtonModule],
  templateUrl: './starlink.component.html',
  styleUrl: './starlink.component.css',
})
export class StarlinkComponent implements OnInit {
  starlinks: Starlink[] = [new Starlink()];
  starlinkCols: Column[] = starlinkColDefs;
  spaceTrackCols: Column[] = spaceTrackColDefs;

  constructor(private spaceXService: SpaceXService) {}

  ngOnInit(): void {
    this.spaceXService.getStarlinkSats().subscribe((sats) => {
      this.starlinks = sats.flatMap((sat) => sat);
      console.log('sats:', this.starlinks);
      const starlinkEmpty = new Starlink();
    });
  }
}
