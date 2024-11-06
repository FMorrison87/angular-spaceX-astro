import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { StarlinkComponent } from './starlink/starlink.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StarlinkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
