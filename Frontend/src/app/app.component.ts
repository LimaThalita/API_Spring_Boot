import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [MatToolbarModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'Frontend';
}
export interface Product {
  id?: string;
  name: string;
  cpu: number;
  memory: number;
  disk: number;
}
