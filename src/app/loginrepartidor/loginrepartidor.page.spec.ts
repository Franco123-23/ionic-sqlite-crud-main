import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginrepartidorPage } from './loginrepartidor.page';

describe('LoginrepartidorPage', () => {
  let component: LoginrepartidorPage;
  let fixture: ComponentFixture<LoginrepartidorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginrepartidorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginrepartidorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
