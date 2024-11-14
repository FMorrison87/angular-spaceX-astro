import { Starlink } from '../+state/starlinks.model';

export interface Column {
  field: string;
  header: string;
  sortable: boolean;
}

export const starlinkColDefs: Column[] = [
  {
    field: 'id',
    header: 'id',
    sortable: true,
  },
  {
    field: 'version',
    header: 'Version',
    sortable: false,
  },
  {
    field: 'launch',
    header: 'Launch',
    sortable: false,
  },
  {
    field: 'longitude',
    header: 'Longitude',
    sortable: false,
  },
  {
    field: 'latitude',
    header: 'Latitude',
    sortable: false,
  },
  {
    field: 'height_km',
    header: 'Height (km)',
    sortable: true,
  },
  {
    field: 'velocity_kms',
    header: 'Velocity (kms)',
    sortable: true,
  },
  {
    field: 'spaceTrack',
    header: 'Spacetrack',
    sortable: false,
  },
];
