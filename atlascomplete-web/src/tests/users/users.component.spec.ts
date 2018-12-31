import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersGridComponent } from 'src/app/modules/prod-admin/users/components/users-grid/users-grid.component';
import { UsersModule } from 'src/app/modules/prod-admin/users/users.module';

let mockRouter: any;
class MockRouter {
  //noinspection TypeScriptUnresolvedFunction
  navigate = jasmine.createSpy('navigate');
}
describe('UsersGridComponent', () => {
  let component: UsersGridComponent;
  let fixture: ComponentFixture<UsersGridComponent>;

  beforeEach(async(() => {
    mockRouter = new MockRouter();
    TestBed.configureTestingModule({
      imports: [
        UsersModule,
        BrowserAnimationsModule
      ],
      providers: [{ provide: Router, useValue: mockRouter }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersGridComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
