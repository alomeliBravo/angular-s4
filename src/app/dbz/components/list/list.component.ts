import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  standalone: false,
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css',]
})
export class ListComponent {
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  onDeleteCharacter(id?:string):void {
    //TODO: Emitir el ID del personaje
    if (!id) return;
    this.onDeleteId.emit(id);
  }

}
