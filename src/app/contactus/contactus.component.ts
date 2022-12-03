import { Component } from '@angular/core';
import { faPhone, faMessage, faLocation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  faPhone = faPhone;
  faMessage = faMessage;
  faLocation = faLocation;
}
