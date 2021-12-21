import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OlvidorepartidorPage } from './olvidorepartidor.page';

describe('OlvidorepartidorPage', () => {
  let component: OlvidorepartidorPage;
  let fixture: ComponentFixture<OlvidorepartidorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlvidorepartidorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OlvidorepartidorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
