import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VermudanzasPage } from './vermudanzas.page';

describe('VermudanzasPage', () => {
  let component: VermudanzasPage;
  let fixture: ComponentFixture<VermudanzasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VermudanzasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VermudanzasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
