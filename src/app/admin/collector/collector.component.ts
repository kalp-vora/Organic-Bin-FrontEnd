import { Component } from '@angular/core';
import { CollectorService } from 'src/app/service/collector.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-collector',
  templateUrl: './collector.component.html',
  styleUrls: ['./collector.component.css']
})
export class CollectorComponent {
  listUsers: any = {}
  listCollector: any = {}

  constructor(
    private collectorService:CollectorService
  ) { }

  ngOnInit(): void {

    this.collectorService.getAllCollector().then(res => {
      this.listUsers = res.data
      console.log("r ", this.listUsers);

      for (let index = 0; index < this.listUsers.length; index++) {
        if (this.listCollector.role == "COLLECTOR") {
          this.listCollector
        }
      }

    })
  }
}
