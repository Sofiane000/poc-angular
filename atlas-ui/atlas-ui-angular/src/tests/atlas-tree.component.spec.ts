import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AtlasTreeModule } from '../../lib/atlas-tree/atlas-tree.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AtlasTreeComponent } from '../../lib/atlas-tree/components/atlas-tree.component';


describe('AtlasTreeComponent', () => {
  let component: AtlasTreeComponent;
  let fixture: ComponentFixture<AtlasTreeComponent>;
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
    component.children = 'children';
    component.textFields = 'TenantTaxnmyName';
    component.isTreeViewHierarchyBinding = true;
    component.isTreeViewExpandable = true;
    component.isEditable = true;
    component.isFilterable = true;
    component.menuItems = [
      { text: 'Add Sibling', icon: 'plus' },
      { text: 'Add Child', icon: 'plus' }
    ];
    component.showRefresh = true;
    component.data = [
      {
        "TenantTaxnmySK": 6,
        "ParentTenantTaxnmySK": null,
        "TenantTaxnmyName": "Global",
        "TenantTaxnmyType": "Global",
        "EfctvStartDt": "1900-01-01",
        "EfctvEndDt": "9999-12-31",
        "RootDomain": "5",
        "daTableRowId": "AAAAAAAJGMU=",
        "expanded": true,
        "children": [
          {
            "TenantTaxnmySK": 1,
            "ParentTenantTaxnmySK": 6,
            "TenantTaxnmyName": "Caidan Management Company (CMC)",
            "TenantTaxnmyType": "Tenant",
            "EfctvStartDt": "1902-01-01",
            "EfctvEndDt": "9999-12-31",
            "RootDomain": "welcome.com1",
            "daTableRowId": "AAAAAAAJGMA=",
            "children": [
              {
                "TenantTaxnmySK": 28,
                "ParentTenantTaxnmySK": 1,
                "TenantTaxnmyName": "Caidan Management Company (CMC)",
                "TenantTaxnmyType": "Acct",
                "EfctvStartDt": "1900-01-01",
                "EfctvEndDt": "9999-12-31",
                "RootDomain": "27",
                "daTableRowId": "AAAAAAAJGNs=",
                "children": [
                  {
                    "TenantTaxnmySK": 63,
                    "ParentTenantTaxnmySK": 28,
                    "TenantTaxnmyName": "Caidan Management Company (CMC)",
                    "TenantTaxnmyType": "Grp",
                    "EfctvStartDt": "1900-01-01",
                    "EfctvEndDt": "9999-12-31",
                    "RootDomain": "62",
                    "daTableRowId": "AAAAAAAJGP4=",
                    "children": [
                      {
                        "TenantTaxnmySK": 319,
                        "ParentTenantTaxnmySK": 63,
                        "TenantTaxnmyName": "Caidan Management Company Employees",
                        "TenantTaxnmyType": "PopGrp",
                        "EfctvStartDt": "1900-01-01",
                        "EfctvEndDt": "9999-12-31",
                        "RootDomain": "316",
                        "daTableRowId": "AAAAAAAJGfw="
                      },
                      {
                        "TenantTaxnmySK": 320,
                        "ParentTenantTaxnmySK": 63,
                        "TenantTaxnmyName": "Caidan Management Company Executives",
                        "TenantTaxnmyType": "PopGrp",
                        "EfctvStartDt": "1900-01-01",
                        "EfctvEndDt": "9999-12-31",
                        "RootDomain": "317",
                        "daTableRowId": "AAAAAAAJGf0="
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
    fixture.autoDetectChanges();
    fixture.detectChanges();
  });

  it('should create atlas tree', () => {
    expect(component).toBeTruthy();
  });
});
