import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { NgFor } from '@angular/common';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserComponent,NgFor],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  readonly users = [
    { id: 1, name: 'Hamza', email: 'Hamza@gmail.com', description: 'description of the user 1', image: 'https://media.istockphoto.com/id/1869943345/photo/planet-earth-in-the-hands-of-a-man-against-the-background-of-the-lights-of-the-evening-city.jpg?s=1024x1024&w=is&k=20&c=AK7CdgvBMBEjPCpuJAJCiHB-xYkZ7vOg7WAY87zEORs=' },
    { id: 2, name: 'Yassmina', email: 'Yassmina@gmail.com', description: 'description of the user 2', image: 'https://media.istockphoto.com/id/1494104649/photo/ai-chatbot-artificial-intelligence-digital-concept.jpg?s=1024x1024&w=is&k=20&c=FQZBVxbXjhgPzm-W-5Jo3O7x7OXLPugwXzTKEu6nV3w=' },
    { id: 3, name: 'Siham', email: 'Siham@gmail.com', description: 'description of the user 3', image: 'https://media.istockphoto.com/id/1401980646/photo/3d-rendered-classic-sculpture-metaverse-avatar-with-network-of-low-poly-glowing-purple-lines.jpg?s=1024x1024&w=is&k=20&c=mf0nOLaHdiCZdkCRwTr2gKjypql-r6UBxpMqr0_Zqr0=' },
    { id: 4, name: 'Noha', email: 'Noha@gmail.com', description: 'description of the user 4', image: 'https://media.istockphoto.com/id/1645602428/photo/perfect-light-purple-and-pink-dahlia-enlarged-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=3bshkw2BCsNg2Outrf4H5xC9mYbB9PmiKfjYb858H2w=' }
  ]



  showUser( user: User){
    console.log('Show User', user.description);
  }
  
  
}
