export declare enum Colour {
    WHITE = "w",
    BLACK = "b"
}
export declare enum PieceType {
    PAWN = "p",
    KNIGHT = "n",
    BISHOP = "b",
    ROOK = "r",
    QUEEN = "q",
    KING = "k"
}
export declare class Move {
    from: string;
    to: string;
    promotion?: string;
    constructor(from: string, to: string, promotion?: string);
}
