import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-vermudanzas',
  templateUrl: './vermudanzas.page.html',
  styleUrls: ['./vermudanzas.page.scss'],
})
export class VermudanzasPage implements OnInit {
  persons: any = [];

  constructor(public database: DatabaseService ) { 
    this.getPersons();
  }

  ngOnInit() {}
  getPersons() {
    this.database.getPersons().then((data) => {
      this.persons = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          this.persons.push(data.rows.item(i));
        }
      }
    });
  }

}
