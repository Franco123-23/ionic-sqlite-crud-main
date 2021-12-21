import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VistaadminPage } from './vistaadmin.page';

describe('VistaadminPage', () => {
  let component: VistaadminPage;
  let fixture: ComponentFixture<VistaadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VistaadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
