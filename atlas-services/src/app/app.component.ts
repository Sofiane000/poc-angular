import { Component, OnInit } from '@angular/core';
import { ComponentSecurityService } from 'atlas-web-services/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'atlas-services';

  constructor(private compSecSvc: ComponentSecurityService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.compSecSvc.loadSecurityMap([{
        CmpntSK: 247,
        FuncPermisnSK: 217,
        JobFuncSK: 34,
        PermisnCreate: false,
        PermisnDel: false,
        PermisnExec: false,
        PermisnMask: false,
        PermisnModify: false,
        PermisnRead: false,
        cf_CmpntID: 'sample-button'
      }]);
    }, 1000);
  }

}
