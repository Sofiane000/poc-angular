import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { DialogContainerService } from '@progress/kendo-angular-dialog/dist/es2015/dialog/dialog-container.service';
import { GroupDescriptor, process, State } from '@progress/kendo-data-query';
import { AtlasGridModule } from '../atlas-grid.module';
import { AtlasGridService } from '../services/atlas-grid.service';
import { TestService, USER_DATA } from '../services/test-grid.service';
import { AtlasGridComponent } from './atlas-grid.component';
describe('AtlasGridComponent', () => {
    let component: AtlasGridComponent;
    let fixture: ComponentFixture<AtlasGridComponent>;
    let service: TestService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AtlasGridModule, DialogModule],
            providers: [TestService, AtlasGridService, DialogContainerService],
        }).compileComponents();
    }));

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [TestService] });
        service = TestBed.get(TestService);
        fixture = TestBed.createComponent(AtlasGridComponent);
        component = fixture.componentInstance;
        component.state = {
            skip: 0,
            take: 100,
        };
        const users = process(USER_DATA, component.state);
        component.gridDataResult = users as any;

        component.gridService = service;
        component.selectable = {
            enabled: true,
            mode: 'single',
            checkboxOnly: true,
        };

        component.isFilterable = false;
        component.isPageable = false;
        component.isSortable = false;
        component.selectedKeys = [];
        component.columns = [
            {
                field: 'FirstName',
                title: 'First Name',
                width: 40,
            },
            {
                field: 'LastName',
                title: 'Last Name',
                width: 40,
            },
            {
                field: 'cf_LoginID',
                title: 'Username',
                width: 40,
            },
            {
                field: 'cf_UserType',
                title: 'UserType',
                width: 40,
            },
            {
                field: 'cf_TenantTaxnmyName',
                title: 'Tenants',
                width: 90,
            },
            {
                field: 'UserStatTypeCode',
                title: 'Status',
                width: 30,
            },
            {
                field: 'UserActvtnInd',
                title: 'Active',
                width: 30,
                showTemplate: true,
            },
        ];
        fixture.autoDetectChanges();
        fixture.detectChanges();
    });

    it('should create atlas grid', () => {
        expect(component).toBeTruthy();
    });
});
