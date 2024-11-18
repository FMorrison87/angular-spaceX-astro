import { Component, inject } from '@angular/core';
import { ICellRendererAngularComp } from '@ag-grid-community/angular';
import { ICellRendererParams } from '@ag-grid-community/core';
import { AstroComponentsModule } from '@astrouxds/angular';
import { Router } from '@angular/router';
import { Starlink } from '../+state/starlinks.model';

@Component({
  selector: 'app-button-renderer',
  standalone: true,
  imports: [AstroComponentsModule],
  templateUrl: './button-renderer.component.html',
  styleUrl: './button-renderer.component.css',
})
export class ButtonRendererComponent implements ICellRendererAngularComp {
  // Init Cell Value
  public value!: Starlink;
  agInit(params: ICellRendererParams): void {
    this.refresh(params);
  }

  private router = inject(Router);

  handleClick() {
    console.log(this.value);
    this.router.navigate(['/starlink/spacetrack/', this.value]);
  }

  // Return Cell Value
  refresh(params: ICellRendererParams): boolean {
    this.value = params.value;

    return true;
  }
}
