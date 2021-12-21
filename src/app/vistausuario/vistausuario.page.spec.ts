import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VistausuarioPage } from './vistausuario.page';

describe('VistausuarioPage', () => {
  let component: VistausuarioPage;
  let fixture: ComponentFixture<VistausuarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistausuarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VistausuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
