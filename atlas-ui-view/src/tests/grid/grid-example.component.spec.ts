import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridExampleComponent } from '../../app/grid/components/grid-example.component';
import { GridModule } from 'src/app/grid/grid.module';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

let mockRouter: any;
class MockRouter {
  //noinspection TypeScriptUnresolvedFunction
  navigate = jasmine.createSpy('navigate');
}
describe('GridExampleComponent', () => {
  let component: GridExampleComponent;
  let fixture: ComponentFixture<GridExampleComponent>;

  beforeEach(async(() => {
    mockRouter = new MockRouter();
    TestBed.configureTestingModule({
      imports: [
        GridModule,
        BrowserAnimationsModule
      ],
      providers: [{ provide: Router, useValue: mockRouter }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridExampleComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
