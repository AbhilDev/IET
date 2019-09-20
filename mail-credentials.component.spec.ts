import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailCredentialsComponent } from './mail-credentials.component';

describe('MailCredentialsComponent', () => {
  let component: MailCredentialsComponent;
  let fixture: ComponentFixture<MailCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailCredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
