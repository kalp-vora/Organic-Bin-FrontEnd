import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  listCompany: any = {}

  constructor(
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    let id = sessionStorage.getItem('isAdminId')
    console.log("id ", id);

    this.companyService.getAllCompany().then(res => {
      this.listCompany = res.data
      console.log("r ", this.listCompany);

    })
  }
}
