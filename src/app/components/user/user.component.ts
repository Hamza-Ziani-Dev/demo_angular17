import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  // Sharing data between parent  to child
  @Input() user: User = {} as User;

  // Sharing data between child to parent
  @Output() userClickEvent = new EventEmitter<User>();




  showUser(){
    this.userClickEvent.emit(this.user);
  }
}
