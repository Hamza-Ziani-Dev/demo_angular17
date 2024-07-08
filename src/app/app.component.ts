import { TranslationService } from './service-translate/translation.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './includes/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CardComponent,NavbarComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data ={
    title : 'demo_angular17'
  }

  TranslationService = inject(TranslationService);

ngOnInit(): void {
  this.TranslationService.setDefaultLang('ar');
}

  readMoreApp(){
    console.log("Read More App");
  }
}
