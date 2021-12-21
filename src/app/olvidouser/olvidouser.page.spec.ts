import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OlvidouserPage } from './olvidouser.page';

describe('OlvidouserPage', () => {
  let component: OlvidouserPage;
  let fixture: ComponentFixture<OlvidouserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlvidouserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OlvidouserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
