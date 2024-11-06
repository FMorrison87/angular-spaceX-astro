export interface Launch {
  auto_update: boolean;
  capsules: string[];
  cores: any[];
  crew: any[];
  date_local: string;
  date_precision: string;
  date_unix: number;
  date_utc: string;
  details: null | any;
  failures: any[];
  fairings: null | any;
  flight_number: number;
  id: string;
  launch_library_id: string;
  launchpad: string;
  links: Record<string, any>;
  name: string;
  net: boolean;
  payloads: string[];
  rocket: string;
  ships: any[];
  static_fire_date_unix: null | any;
  static_fire_date_utc: null | any;
  success: boolean;
  tbd: boolean;
  upcoming: boolean;
  window: null | any;
}
