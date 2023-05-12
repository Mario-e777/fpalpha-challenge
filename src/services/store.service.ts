import { Injectable } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from '../shared/components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(public dialogo: MatDialog) {}
  mostrarDialogo(key: string, data: any): void {
    this.dialogo
      .open(DialogComponent, {
        data: `Please take a moment to review your changes before saving.`
      })
      .afterClosed()
      .subscribe((confirmedDialog: Boolean) => {
        if (confirmedDialog) {
          localStorage.setItem(key, data);
        } else { }
      });
  }

  saveData(key: string, data: any) {
    this.mostrarDialogo(key, JSON.stringify(data));
  }
}
