import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroadminPage } from './registroadmin.page';

describe('RegistroadminPage', () => {
  let component: RegistroadminPage;
  let fixture: ComponentFixture<RegistroadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
