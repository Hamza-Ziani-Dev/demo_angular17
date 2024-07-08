import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {


  constructor(private activatedRoute: ActivatedRoute, private router : Router) {

  }

  ngOnInit(): void {
    this.getIdSnapshot();

    this.getIdDenamicId();
  }

  // Navigation Static Id
getIdSnapshot(){
  const id = this.activatedRoute.snapshot.paramMap.get('id');
  console.log(id);
} 

 // Navigation Denamic Id
 getIdDenamicId(){
  const id = this.activatedRoute.params.subscribe((params) => {
    console.log(params['id'], typeof params['id']);
  });
    
  console.log(id);
} 



  // Next Page
  NextPage() : void{
    this.router.navigate(['/userDetails/6']);
  }

}
