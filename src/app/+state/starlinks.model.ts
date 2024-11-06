export class Starlink {
  spaceTrack: SpaceTrack = new SpaceTrack();
  version: string = '';
  launch: string = '';
  longitude: number = 0;
  latitude: number = 0;
  height_km: number = 0;
  velocity_kms: number = 0;
  id: string = '';
}

export class SpaceTrack {
  CCSDS_OMM_VERS: string = '';
  COMMENT: string = '';
  CREATION_DATE: string = '';
  ORIGINATOR: string = '';
  OBJECT_NAME: string = '';
  OBJECT_ID: string = '';
  CENTER_NAME: string = '';
  REF_FRAME: string = '';
  TIME_SYSTEM: string = '';
  MEAN_ELEMENT_THEORY: string = '';
  EPOCH: string = '';
  MEAN_MOTION: number = 0;
  ECCENTRICITY: number = 0;
  INCLINATION: number = 0;
  RA_OF_ASC_NODE: number = 0;
  ARG_OF_PERICENTER: number = 0;
  MEAN_ANOMALY: number = 0;
  EPHEMERIS_TYPE: number = 0;
  CLASSIFICATION_TYPE: string = '';
  NORAD_CAT_ID: number = 0;
  ELEMENT_SET_NO: number = 0;
  REV_AT_EPOCH: number = 0;
  BSTAR: number = 0;
  MEAN_MOTION_DOT: number = 0;
  MEAN_MOTION_DDOT: number = 0;
  SEMIMAJOR_AXIS: number = 0;
  PERIOD: number = 0;
  APOAPSIS: number = 0;
  PERIAPSIS: number = 0;
  OBJECT_TYPE: string = '';
  RCS_SIZE: unknown | null = null;
  COUNTRY_CODE: string = '';
  LAUNCH_DATE: string = '';
  SITE: string = '';
  DECAY_DATE: string | null = null;
  DECAYED: number = 0;
  FILE: number = 0;
  GP_ID: number = 0;
  TLE_LINE0: string = '';
  TLE_LINE1: string = '';
  TLE_LINE2: string = '';
}
