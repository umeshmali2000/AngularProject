import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  name:string='Umesh Mali';
  age:string='23';
  nationality:string='Indian';

}
