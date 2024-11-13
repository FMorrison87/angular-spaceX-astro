import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { StarlinkComponent } from './starlink/starlink.component';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StarlinkComponent, CardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
