import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExitosoadminPage } from './exitosoadmin.page';

describe('ExitosoadminPage', () => {
  let component: ExitosoadminPage;
  let fixture: ComponentFixture<ExitosoadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitosoadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExitosoadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
