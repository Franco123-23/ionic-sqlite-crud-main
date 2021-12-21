import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginusuarioPage } from './loginusuario.page';

describe('LoginusuarioPage', () => {
  let component: LoginusuarioPage;
  let fixture: ComponentFixture<LoginusuarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginusuarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginusuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
