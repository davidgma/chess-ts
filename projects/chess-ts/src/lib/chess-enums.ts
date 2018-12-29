
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