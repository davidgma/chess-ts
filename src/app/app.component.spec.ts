import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Chess, Move} from 'chess-ts';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'chess-ts-app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('chess-ts-app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to chess-ts-app!');
  }));
});

describe('Chess class', () => {
  let chess: Chess;
  // beforeAll(() => {
  //   chess = new Chess();
  // });

  it('should have the correct opening fen when instatiated with no arg',
  () => {
    chess = new Chess();
    expect(chess.fen).toEqual('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
  });
  it('should have the correct fen when instantiated with a fen',
  () => {
    chess = new Chess('rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3 0 1');
    expect(chess.fen).toEqual('rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3 0 1');
  });
  it('should have the correct ending fen after a series of moves type Move',
  () => {
    chess = new Chess('rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3 0 1');
    let movesCsv = 'g8f6,g1f3,e7e6,c2c4,d7d5,b1c3,d5c4,e2e4,f8b4,c1g5,b7b5,e4e5,h7h6,g5h4,g7g5,f3g5,f6d5,g5f7,d8h4,f7h8,d5c3,d1d2,h4e4,f1e2,c3e2,d2b4,e2d4,e1f1,e4d3,f1g1,d4e2,g1f1,e2g3,f1g1,d3f1,a1f1,g3e2';
    let moves = movesCsv.split(',');
    for (let move of moves)  {
      let m = new Move(move.substr(0,2), move.substr(2,2));
      // console.log(chess.fen);
      chess.move(m);
    }
    expect(chess.fen).toEqual('rnb1k2N/p1p5/4p2p/1p2P3/1Qp5/8/PP2nPPP/5RKR w q - 1 20');
  });
  it('should have the correct ending fen after a series of moves type string',
  () => {
    chess = new Chess();
    let movesCsv = 'e4,c5,Nf3,d6,d4,Nc6,dxc5,Ne5,c6,Nxf3,gxf3,Bh3,Qxd6,Rc8,cxb7,Rc3';
    let moves = movesCsv.split(',');
    for (let move of moves)  {
      chess.move(move);
    }
    expect(chess.fen).toEqual('3qkbnr/pP2pppp/3Q4/8/4P3/2r2P1b/PPP2P1P/RNB1KB1R w KQk - 1 9');
  });
});
