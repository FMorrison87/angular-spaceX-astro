import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../+state/spacex.service';
import { Starlink } from '../+state/starlinks.model';

import { TableModule } from 'primeng/table';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-starlink',
  standalone: true,
  imports: [TableModule],
  templateUrl: './starlink.component.html',
  styleUrl: './starlink.component.css',
})
export class StarlinkComponent implements OnInit {
  starlinks: Starlink[] = [new Starlink()];
  cols: Column[] = [];

  constructor(private spaceXService: SpaceXService) {}

  ngOnInit(): void {
    this.spaceXService.getStarlinkSats().subscribe((sats) => {
      this.starlinks = sats.flatMap((sat) => sat);
      console.log('sats:', this.starlinks);
      const starlinkEmpty = new Starlink();
      console.log(Object.keys(starlinkEmpty), 'IT EMPTY');

      this.cols = Object.keys(starlinkEmpty).map((key) => ({
        field: key,
        header: key.toUpperCase(),
      }));
    });
  }
}
