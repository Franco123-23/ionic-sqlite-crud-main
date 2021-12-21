import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorrectcontraPage } from './correctcontra.page';

describe('CorrectcontraPage', () => {
  let component: CorrectcontraPage;
  let fixture: ComponentFixture<CorrectcontraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectcontraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrectcontraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
