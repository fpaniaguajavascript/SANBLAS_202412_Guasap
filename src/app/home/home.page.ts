import { Component, inject } from '@angular/core';
import { IonItem, IonList, IonButton, IonInput, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { FirebaseService } from '../services/firebase.service';
import { FormsModule } from '@angular/forms';
import { Mensaje } from '../interfaces/mensaje';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonItem, IonList, IonButton, IonInput, IonHeader, IonToolbar, IonTitle, IonContent, FormsModule],
})
export class HomePage {
  mensaje : Mensaje = {};
  firebaseService = inject(FirebaseService);
  
  constructor() {
  }
  enviar(){
    this.firebaseService.enviarMensaje(this.mensaje);
    this.mensaje.mensaje = "";
  }
}
