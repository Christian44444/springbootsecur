import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApirestService } from './apirest.service';
import { Client } from './client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'springbootsecur';
  
  newClient: Client = { 'nom': 'VALLET',
                        'prenom': 'Jean'};

  constructor(private api :ApirestService) {
    api.getAllUsers();
    api.createClient(this.newClient);

    api.deleteClient(7);
  };

  

}

