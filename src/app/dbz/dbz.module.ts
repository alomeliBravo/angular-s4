import { AddCharacterComponent } from './components/add-character/add-character.component';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { NgModule } from '@angular/core';
import { ListComponent } from './components/list/list.component';




@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
