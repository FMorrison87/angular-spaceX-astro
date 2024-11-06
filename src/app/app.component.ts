import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { LaunchService } from './+state/launches.service';
import { Launch } from './+state/launch.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, CardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular-spaceX-test';

  launches: Launch[] = [];

  constructor(private launchService: LaunchService) {}

  ngOnInit(): void {
    this.launchService.getLaunches().subscribe((launches) => {
      console.log('LAUNCHES:', launches);
      this.launches = launches;
    });
  }
}
