import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaseProviderSearchFormComponent } from './chase-provider-search-form.component';

describe('ChaseProviderSearchFormComponent', () => {
  let component: ChaseProviderSearchFormComponent;
  let fixture: ComponentFixture<ChaseProviderSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaseProviderSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaseProviderSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
