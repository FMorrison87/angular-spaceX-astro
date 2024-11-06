import { Starlink } from '../+state/starlinks.model';

export interface Column {
  field: string;
  header: string;
}

const starLinkObject = new Starlink();

export const starlinkColDefs: Column[] = Object.keys(starLinkObject).map(
  (key) => ({
    field: key,
    header: key.toUpperCase(),
  })
);

export const spaceTrackColDefs: Column[] = Object.keys(
  starLinkObject.spaceTrack
).map((key) => ({
  field: key,
  header: key.toUpperCase(),
}));
