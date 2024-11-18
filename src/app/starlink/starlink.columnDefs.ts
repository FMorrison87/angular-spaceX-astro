import { Starlink } from '../+state/starlinks.model';
import { ColDef } from 'ag-grid-community';
import { ButtonRendererComponent } from '../button-renderer/button-renderer.component';

export const starlinkColDefs: ColDef<Starlink>[] = [
  {
    field: 'id',
    headerName: 'id',
    sortable: true,
    initialSort: 'desc',
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
    field: 'id',
    headerName: 'Spacetrack',
    cellRenderer: ButtonRendererComponent,
    width: 130,
    sortable: false,
  },
];
