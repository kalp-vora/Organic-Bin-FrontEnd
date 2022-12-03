import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CityService } from 'src/app/service/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  listCity: any = {}

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cityService.getCity().then(res => {
      console.log("r ", res.data);
      this.listCity = res.data
    })
  }
}
