import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header, SideMenu, Table, EditDataMenu, EditForm } from './components';
import { RouterModule } from '@angular/router';
import { numberAbbrebiation } from './pipes/number-abrebiation.pipe';
import { cleanURL } from './pipes/clean-url.pipe';

const COMPONENTS = [
  Header,
  SideMenu,
  Table,
  EditDataMenu,
  EditForm,
  numberAbbrebiation,
  cleanURL,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule],
  exports: [CommonModule, ...COMPONENTS],
})
export class SharedModule { }
