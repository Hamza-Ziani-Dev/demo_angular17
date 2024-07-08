import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = "";
  // @Output() readMoreCardOne = new EventEmitter();


  readMoreCard(){
    console.log("Read More Card");
  }

}
