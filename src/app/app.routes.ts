import { Routes } from '@angular/router';
import { StarlinkComponent } from './starlink/starlink.component';
import { SpacetrackComponent } from './spacetrack/spacetrack.component';

export const routes: Routes = [
  { path: '', component: StarlinkComponent },
  { path: 'starlink/spacetrack/:id', component: SpacetrackComponent },
  { path: '**', component: StarlinkComponent },
];
