import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VistarepartidorPage } from './vistarepartidor.page';

describe('VistarepartidorPage', () => {
  let component: VistarepartidorPage;
  let fixture: ComponentFixture<VistarepartidorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistarepartidorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VistarepartidorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
