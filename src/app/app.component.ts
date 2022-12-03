import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OrganicBin-Frontend';

  id: any = ""

  constructor() { }

  ngOnInit() {
    this.id = sessionStorage.getItem('isAdminId')
    console.log("id ", this.id);
  }
}
