import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerExampleComponent } from './server-example.component';

describe('ServerExampleComponent', () => {
  let component: ServerExampleComponent;
  let fixture: ComponentFixture<ServerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
