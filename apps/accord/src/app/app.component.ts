import { Component } from '@angular/core';

interface Accord {
  title: string;
}

@Component({
  selector: 'rebelio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'accord';
  accords: Accord[] = [{ title: 'Acc 1' }, { title: 'Acc 1' }];

  addAccord() {
    this.accords.push({
      title: `New Accord ${Math.floor(Math.random() * 1000)}`,
    });
  }
}
