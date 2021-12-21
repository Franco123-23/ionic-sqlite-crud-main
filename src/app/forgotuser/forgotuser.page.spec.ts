import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForgotuserPage } from './forgotuser.page';

describe('ForgotuserPage', () => {
  let component: ForgotuserPage;
  let fixture: ComponentFixture<ForgotuserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotuserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
