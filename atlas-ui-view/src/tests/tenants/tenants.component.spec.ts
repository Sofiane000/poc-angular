import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TenantsModule } from 'src/app/tenants/tenants.module';
import { TenantsTreeComponent } from 'src/app/tenants/components/tenants-tree/tenants-tree.component';

describe('TenantsTreeComponent', () => {
  let component: TenantsTreeComponent;
  let fixture: ComponentFixture<TenantsTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        TenantsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantsTreeComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
