import { TranslationService } from './service-translate/translation.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './includes/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CardComponent,NavbarComponent,UsersComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data ={
    title : 'demo_angular17'
  }

  TranslationService = inject(TranslationService);

ngOnInit(): void {
  this.TranslationService.setDefaultLang('en');
}

  readMoreApp(){
    console.log("Read More App");
  }
}
