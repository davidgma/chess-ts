import { Colour, Move } from './chess-enums';
import { EventEmitter } from '@angular/core';
export declare class Chess {
    EMPTY: number;
    onChange: EventEmitter<void>;
    SYMBOLS: string;
    DEFAULT_POSITION: string;
    POSSIBLE_RESULTS: string[];
    PAWN_OFFSETS: {
        b: number[];
        w: number[];
    };
    PIECE_OFFSETS: {
        n: number[];
        b: number[];
        r: number[];
        q: number[];
        k: number[];
    };
    ATTACKS: number[];
    RAYS: number[];
    SHIFTS: {
        p: number;
        n: number;
        b: number;
        r: number;
        q: number;
        k: number;
    };
    FLAGS: {
        NORMAL: string;
        CAPTURE: string;
        BIG_PAWN: string;
        EP_CAPTURE: string;
        PROMOTION: string;
        KSIDE_CASTLE: string;
        QSIDE_CASTLE: string;
    };
    BITS: {
        NORMAL: number;
        CAPTURE: number;
        BIG_PAWN: number;
        EP_CAPTURE: number;
        PROMOTION: number;
        KSIDE_CASTLE: number;
        QSIDE_CASTLE: number;
    };
    RANK_1: number;
    RANK_2: number;
    RANK_3: number;
    RANK_4: number;
    RANK_5: number;
    RANK_6: number;
    RANK_7: number;
    RANK_8: number;
    SQUARES: {
        a8: number;
        b8: number;
        c8: number;
        d8: number;
        e8: number;
        f8: number;
        g8: number;
        h8: number;
        a7: number;
        b7: number;
        c7: number;
        d7: number;
        e7: number;
        f7: number;
        g7: number;
        h7: number;
        a6: number;
        b6: number;
        c6: number;
        d6: number;
        e6: number;
        f6: number;
        g6: number;
        h6: number;
        a5: number;
        b5: number;
        c5: number;
        d5: number;
        e5: number;
        f5: number;
        g5: number;
        h5: number;
        a4: number;
        b4: number;
        c4: number;
        d4: number;
        e4: number;
        f4: number;
        g4: number;
        h4: number;
        a3: number;
        b3: number;
        c3: number;
        d3: number;
        e3: number;
        f3: number;
        g3: number;
        h3: number;
        a2: number;
        b2: number;
        c2: number;
        d2: number;
        e2: number;
        f2: number;
        g2: number;
        h2: number;
        a1: number;
        b1: number;
        c1: number;
        d1: number;
        e1: number;
        f1: number;
        g1: number;
        h1: number;
    };
    ROOKS: {
        w: {
            square: number;
            flag: number;
        }[];
        b: {
            square: number;
            flag: number;
        }[];
    };
    board: ChessPiece[];
    kings: {
        w: number;
        b: number;
    };
    turn: Colour;
    castling: Castling;
    ep_square: number;
    half_moves: number;
    move_number: number;
    history: any[];
    header: any;
    constructor(fen?: string);
    clear(): void;
    reset(): void;
    load(fen: any): boolean;
    validate_fen(fen: any): FenValidationResult;
    generate_fen(): string;
    set_header(args: any): any;
    update_setup(fen: any): void;
    get(square: any): {
        type: any;
        color: any;
    };
    put(piece: any, square: any): boolean;
    remove(square: any): {
        type: any;
        color: any;
    };
    build_move(board: any, from: any, to: any, flags: any, promotion?: any): {
        color: Colour;
        from: any;
        to: any;
        flags: any;
        piece: any;
        promotion: any;
        captured: any;
    };
    private add_move;
    generate_moves(options?: any): any[];
    move_to_san(move: any, sloppy?: any): string;
    stripped_san(move: any): any;
    attacked(color: any, square: any): boolean;
    king_attacked(color: any): boolean;
    in_check(): boolean;
    in_checkmate(): boolean;
    in_stalemate(): boolean;
    insufficient_material(): boolean;
    in_threefold_repetition(): boolean;
    push(move: any): void;
    make_move(move: any): void;
    undo_move(): any;
    get_disambiguator(move: any, sloppy: any): string;
    ascii(): string;
    move_from_san(move: any, sloppy: any): any;
    /*****************************************************************************
     * UTILITY FUNCTIONS
     ****************************************************************************/
    rank(i: any): number;
    file(i: any): number;
    algebraic(i: any): string;
    swap_color(c: any): Colour;
    is_digit(c: any): boolean;
    make_pretty(ugly_move: any): any;
    clone(obj: any): any;
    trim(str: any): any;
    /*****************************************************************************
     * DEBUGGING UTILITIES
     ****************************************************************************/
    perft(depth: any): number;
    getSquares(): any[];
    getMoves(options: any): any[];
    get in_draw(): boolean;
    get game_over(): boolean;
    get fen(): string;
    getPgn(options: any): string;
    load_pgn(pgn: any, options: any): boolean;
    getHeader(): any;
    move(move: Move | string, options?: any): any;
    undo(): any;
    square_color(square: any): "light" | "dark";
    getHistory(options: any): any[];
}
export declare class FenValidationResult {
    valid: boolean;
    error_number: number;
    error: string;
}
export declare class ChessPiece {
    color: any;
    type: any;
}
declare class Castling {
    w: any;
    b: any;
}
export {};
