import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeExampleComponent } from '../../app/tree/tree-example/tree-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeModule } from 'src/app/tree/tree.module';

describe('TreeExampleComponent', () => {
  let component: TreeExampleComponent;
  let fixture: ComponentFixture<TreeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        TreeModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeExampleComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
