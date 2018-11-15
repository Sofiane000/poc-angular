import { AtlasGridService } from './atlas-grid.service';
import { Observable, merge, of as observableOf } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export class TestService extends AtlasGridService {
  query(state: any): void {
    this.fetch(state).subscribe(x => super.next(x));
  }
  fetch(state: any): Observable<any> {
    this.isLoading = true;
    const dataMutations = [
      observableOf(USER_DATA)
    ];
    // data has to be replaced with live data
    return merge(...dataMutations).pipe(map((response) => {
      return response;
    }), tap(() => this.isLoading = false));
  }
}
const USER_DATA = [
  {
    'UserMstrSK': 6,
    'LoginSK': 6,
    'EmailAddr': 'sofiane.may12@mhplan.com',
    'FirstName': 'Barry',
    'MidName': 'Tomas',
    'LastName': 'StarK',
    'NameSfx': '',
    'PhNbr': '1111',
    'PhNbrExtn': '1',
    'DOB': '2000-01-07',
    'CreatedBy': 'Sys',
    'CreatedTs': '2018-05-04T15:07:24.693-04:00',
    'LastModfdBy': '',
    'LastModfdTs': '2018-10-25T12:24:51.240-04:00',
    'UserStatTypeCode': 'E',
    'UserTypeCode': 'I',
    'EmpNbr': '',
    'UserActvtnInd': true,
    'RecStat': 'A',
    'cf_UserType': 'I',
    'cf_LoginID': 'bstark',
    'cf_TenantTaxnmyName': 'Global',
    'cf_UserStatTypeDesc': 'Enabled',
    'daTableRowId': 'AAAAAAAKwIE='
  },
  {
    'UserMstrSK': 26,
    'LoginSK': 32,
    'EmailAddr': 'laura.senko@mhplan.com',
    'FirstName': 'Steve',
    'MidName': '',
    'LastName': 'Harrington',
    'NameSfx': '',
    'PhNbr': '1111111111',
    'PhNbrExtn': '1',
    'DOB': '1967-06-27',
    'CreatedBy': 'bstark',
    'CreatedTs': '2018-02-27T15:06:51.583-05:00',
    'LastModfdBy': 'bstark',
    'LastModfdTs': '2018-10-22T13:44:18.176-04:00',
    'UserStatTypeCode': 'AW',
    'UserTypeCode': 'Internal',
    'EmpNbr': '12345',
    'UserActvtnInd': true,
    'RecStat': 'A',
    'cf_UserType': 'I',
    'cf_LoginID': 'sharringtoN',
    'cf_TenantTaxnmyName': 'Davidson Plyforms Employees',
    'cf_UserStatTypeDesc': 'Awaiting Verification',
    'daTableRowId': 'AAAAAAAKwJU='
  },
  {
    'UserMstrSK': 29,
    'LoginSK': 37,
    'EmailAddr': 'Andrew.French@mhplan.com',
    'FirstName': 'Automated',
    'MidName': '',
    'LastName': 'Tester',
    'NameSfx': '',
    'PhNbr': '1111111111',
    'PhNbrExtn': '1',
    'DOB': '2000-01-01',
    'CreatedBy': 'bstark',
    'CreatedTs': '2018-03-13T10:18:39.492-04:00',
    'LastModfdBy': '',
    'LastModfdTs': '2018-09-20T15:44:23.726-04:00',
    'UserStatTypeCode': 'E',
    'UserTypeCode': 'I',
    'EmpNbr': '',
    'UserActvtnInd': true,
    'RecStat': 'A',
    'cf_UserType': 'I',
    'cf_LoginID': 'autotest',
    'cf_TenantTaxnmyName': 'Pharmastar',
    'cf_UserStatTypeDesc': 'Enabled',
    'daTableRowId': 'AAAAAAAKwJg='
  },
  {
    'UserMstrSK': 46,
    'LoginSK': 55,
    'EmailAddr': 'ashwinkumar.sarmaviswanathan@mhplan.com',
    'FirstName': 'muffassa',
    'MidName': '',
    'LastName': 'muffassaaaa',
    'NameSfx': '',
    'PhNbr': '',
    'PhNbrExtn': '1',
    'DOB': '2000-01-01',
    'CreatedBy': 'bstark',
    'CreatedTs': '2018-03-21T10:46:47.778-04:00',
    'LastModfdBy': '',
    'LastModfdTs': '2018-10-22T08:37:54.336-04:00',
    'UserStatTypeCode': 'AW',
    'UserTypeCode': 'Internal',
    'EmpNbr': '1234',
    'UserActvtnInd': true,
    'RecStat': 'A',
    'cf_UserType': 'I',
    'cf_LoginID': 'mmuffassa',
    'cf_TenantTaxnmyName': 'AutomatedTenant10689',
    'cf_UserStatTypeDesc': 'Awaiting Verification',
    'daTableRowId': 'AAAAAAAKwKE='
  },
  {
    'UserMstrSK': 48,
    'LoginSK': 62,
    'EmailAddr': 'yokesh.parasuraman@mhplan.com',
    'FirstName': 'Yokesh',
    'MidName': '',
    'LastName': 'Parasuraman',
    'NameSfx': '',
    'PhNbr': '__________',
    'PhNbrExtn': '1',
    'DOB': '2001-01-01',
    'CreatedBy': 'bstark',
    'CreatedTs': '2018-05-02T10:55:04.687-04:00',
    'LastModfdBy': '',
    'LastModfdTs': '2018-09-20T15:44:26.072-04:00',
    'UserStatTypeCode': 'E',
    'UserTypeCode': 'I',
    'EmpNbr': '',
    'UserActvtnInd': true,
    'RecStat': 'A',
    'cf_UserType': 'I',
    'cf_LoginID': 'bpmadmin',
    'cf_TenantTaxnmyName': 'Pharmastar',
    'cf_UserStatTypeDesc': 'Enabled',
    'daTableRowId': 'AAAAAAAKwKM='
  },
];
