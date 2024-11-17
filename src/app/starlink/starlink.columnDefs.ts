import { Starlink } from '../+state/starlinks.model';
import { ColDef } from 'ag-grid-community';

// export interface ColDef<T> {
//   field: string;
//   headerName: string;
//   sortable: boolean;
// }

export const starlinkColDefs: ColDef<Starlink>[] = [
  {
    field: 'id',
    headerName: 'id',
    sortable: true,
  },
  {
    field: 'version',
    headerName: 'Version',
    sortable: false,
  },
  {
    field: 'launch',
    headerName: 'Launch',
    sortable: false,
  },
  {
    field: 'longitude',
    headerName: 'Longitude',
    sortable: false,
  },
  {
    field: 'latitude',
    headerName: 'Latitude',
    sortable: false,
  },
  {
    field: 'height_km',
    headerName: 'Height (km)',
    sortable: true,
  },
  {
    field: 'velocity_kms',
    headerName: 'Velocity (kms)',
    sortable: true,
  },
  {
    field: 'spaceTrack',
    headerName: 'Spacetrack',
    sortable: false,
  },
];
