import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonButton, IonText } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { supabase } from '../supabase.client';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonButton, IonText],
})
export class HomePage {
  selectedFile: File | null = null;
  uploadSuccess = false;
  uploadError = false;

  constructor() {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.selectedFile = file ? file : null;
    this.uploadSuccess = false;
    this.uploadError = false;
  }

  async uploadFile(event: Event) {
    event.preventDefault();
    this.uploadSuccess = false;
    this.uploadError = false;
    if (!this.selectedFile) return;
    try {
      // Cambia 'archivos' por el nombre de tu bucket en Supabase Storage
      const { error } = await supabase.storage.from('archivos').upload(this.selectedFile.name, this.selectedFile, {
        cacheControl: '3600',
        upsert: false
      });
      if (error) throw error;
      this.uploadSuccess = true;
      this.selectedFile = null;
    } catch (e) {
      this.uploadError = true;
    }
  }
}
