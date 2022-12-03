import { Component } from '@angular/core';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent {
  listState: any = {}

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.stateService.getState().then(res => {
      console.log("r ", res.data);
      this.listState = res.data
    })
  }

}
