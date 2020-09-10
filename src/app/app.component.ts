import { Component, OnInit } from '@angular/core';
import { Chess } from 'chess-ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chess-ts-app';
  output = new Array<string>();

  async ngOnInit() {
    let p = new Promise<void>((resolve) => {
      let chess = new Chess();
      this.output.push("Starting fen: " + chess.fen);
    });
  }
}
