import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AtlasGridComponent } from '../../lib/atlas-grid/components/atlas-grid.component';
import { AtlasGridModule } from '../../lib/atlas-grid/atlas-grid.module';
import { TestService, USER_DATA } from '../../lib/atlas-grid/services/test-grid.service';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { State, process, GroupDescriptor } from '@progress/kendo-data-query';
import { AtlasGridService } from '../../lib/atlas-grid/services/atlas-grid.service';
import { DialogContainerService } from '@progress/kendo-angular-dialog/dist/es2015/dialog/dialog-container.service';
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
        component.gridDataResult = <any>users;

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
