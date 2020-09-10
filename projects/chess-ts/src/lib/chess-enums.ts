
/* todo:
    make async and sync alternatives to the calling.
    bring enums into the chess.ts file.
    fix public/private variables
    make sure everything has an explicit type
    create separate classes game, fen, piece
    fix the todos
    add documentation and generate API doc
*/

export enum Colour {
    WHITE = 'w',
    BLACK = 'b'
}

export enum PieceType {
    PAWN = 'p',
    KNIGHT = 'n',
    BISHOP = 'b',
    ROOK = 'r',
    QUEEN = 'q',
    KING = 'k'
}

export class Move {
    constructor(public from: string, public to: string,
        public promotion?: string) {}
}