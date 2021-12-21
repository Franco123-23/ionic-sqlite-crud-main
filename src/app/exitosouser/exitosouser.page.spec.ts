import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExitosouserPage } from './exitosouser.page';

describe('ExitosouserPage', () => {
  let component: ExitosouserPage;
  let fixture: ComponentFixture<ExitosouserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitosouserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExitosouserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
