import { Component } from '@angular/core';
import { ApirestService } from './apirest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'springbootsecur';

  constructor(private api :ApirestService) {
    api.getAllUsers();
  }
}

