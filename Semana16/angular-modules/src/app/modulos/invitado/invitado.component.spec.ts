import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitadoComponent } from './invitado.component';

describe('InvitadoComponent', () => {
  let component: InvitadoComponent;
  let fixture: ComponentFixture<InvitadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
