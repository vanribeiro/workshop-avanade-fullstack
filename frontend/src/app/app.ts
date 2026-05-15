import { Component } from '@angular/core';
import { ItemManagerComponent } from './item-manager/item-manager.component';

@Component({
  selector: 'app-root',
  imports: [ItemManagerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
