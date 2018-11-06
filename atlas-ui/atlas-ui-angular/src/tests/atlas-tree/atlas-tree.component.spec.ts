import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasTreeComponent } from '../../lib/atlas-tree/components/atlas-tree.component';
import { AtlasTreeModule } from '../../lib/atlas-tree/atlas-tree.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('AtlasTreeComponent', () => {
  let component: AtlasTreeComponent;
  let fixture: ComponentFixture<AtlasTreeComponent>;
  let tree;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AtlasTreeModule,
        BrowserAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasTreeComponent);
    component = fixture.componentInstance;
    tree = fixture.debugElement.query(By.css('tree'));
    component.data = TREE_DATA;
    component.isTreeViewExpandable = true,
    component.isTreeViewHierarchyBinding = true;
    component.children = "children",
    component.textFields = "TenantTaxnmyName";
    fixture.autoDetectChanges();
    fixture.detectChanges();
  });

  it('should create atlas tree', () => {
    expect(component).toBeTruthy();
  });
});
const TREE_DATA = [
  {
    "TenantTaxnmySK": 6,
    "ParentTenantTaxnmySK": 0,
    "TenantTaxnmyName": "Global",
    "TenantTaxnmyType": "Global",
    "EfctvStartDt": "1900-01-01",
    "EfctvEndDt": "9999-12-31",
    "RootDomain": "5",
    "daTableRowId": "AAAAAAAJGMU=",
    "children": [
      {
        "TenantTaxnmySK": 16,
        'ParentTenantTaxnmySK': 6,
        'TenantTaxnmyName': 'Prescription Cost Management',
        'TenantTaxnmyType': 'Tenant',
        'EfctvStartDt': '1900-01-01',
        'EfctvEndDt': '9999-12-31',
        'RootDomain': '15',
        'daTableRowId': 'AAAAAAAJGM8=',
        'children': [
          {
            'TenantTaxnmySK': 45,
            'ParentTenantTaxnmySK': 16,
            'TenantTaxnmyName': 'Prescription Cost Management',
            'TenantTaxnmyType': 'Acct',
            'EfctvStartDt': '1900-01-01',
            'EfctvEndDt': '9999-12-31',
            'RootDomain': '44',
            'daTableRowId': 'AAAAAAAJGOw=',
            'children': [
              {
                'TenantTaxnmySK': 95,
                'ParentTenantTaxnmySK': 45,
                'TenantTaxnmyName': 'Prescription Cost Management',
                'TenantTaxnmyType': 'Grp',
                'EfctvStartDt': '1900-01-01',
                'EfctvEndDt': '9999-12-31',
                'RootDomain': '94',
                'daTableRowId': 'AAAAAAAJGR4=',
                'children': [
                  {
                    'TenantTaxnmySK': 903,
                    'ParentTenantTaxnmySK': 95,
                    'TenantTaxnmyName': 'Prescription Cost Management',
                    'TenantTaxnmyType': 'PopGrp',
                    'EfctvStartDt': '1900-01-01',
                    'EfctvEndDt': '9999-12-31',
                    'RootDomain': '900',
                    'daTableRowId': 'AAAAAAAJHEQ='
                  }
                ]
              }
            ]
          }
        ]
      },
    ]
  }
];