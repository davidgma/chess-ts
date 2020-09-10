/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Colour, PieceType } from './chess-enums';
import { EventEmitter } from '@angular/core';
export class Chess {
    /**
     * @param {?=} fen
     */
    constructor(fen) {
        this.EMPTY = -1;
        this.onChange = new EventEmitter();
        this.SYMBOLS = 'pnbrqkPNBRQK';
        this.DEFAULT_POSITION = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
        this.POSSIBLE_RESULTS = ['1-0', '0-1', '1/2-1/2', '*'];
        this.PAWN_OFFSETS = {
            b: [16, 32, 17, 15],
            w: [-16, -32, -17, -15]
        };
        this.PIECE_OFFSETS = {
            n: [-18, -33, -31, -14, 18, 33, 31, 14],
            b: [-17, -15, 17, 15],
            r: [-16, 1, 16, -1],
            q: [-17, -16, -15, 1, 17, 16, 15, -1],
            k: [-17, -16, -15, 1, 17, 16, 15, -1]
        };
        this.ATTACKS = [
            20, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 20, 0,
            0, 20, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 20, 0, 0,
            0, 0, 20, 0, 0, 0, 0, 24, 0, 0, 0, 0, 20, 0, 0, 0,
            0, 0, 0, 20, 0, 0, 0, 24, 0, 0, 0, 20, 0, 0, 0, 0,
            0, 0, 0, 0, 20, 0, 0, 24, 0, 0, 20, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 20, 2, 24, 2, 20, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 2, 53, 56, 53, 2, 0, 0, 0, 0, 0, 0,
            24, 24, 24, 24, 24, 24, 56, 0, 56, 24, 24, 24, 24, 24, 24, 0,
            0, 0, 0, 0, 0, 2, 53, 56, 53, 2, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 20, 2, 24, 2, 20, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 20, 0, 0, 24, 0, 0, 20, 0, 0, 0, 0, 0,
            0, 0, 0, 20, 0, 0, 0, 24, 0, 0, 0, 20, 0, 0, 0, 0,
            0, 0, 20, 0, 0, 0, 0, 24, 0, 0, 0, 0, 20, 0, 0, 0,
            0, 20, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 20, 0, 0,
            20, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 20
        ];
        this.RAYS = [
            17, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 15, 0,
            0, 17, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 15, 0, 0,
            0, 0, 17, 0, 0, 0, 0, 16, 0, 0, 0, 0, 15, 0, 0, 0,
            0, 0, 0, 17, 0, 0, 0, 16, 0, 0, 0, 15, 0, 0, 0, 0,
            0, 0, 0, 0, 17, 0, 0, 16, 0, 0, 15, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 17, 0, 16, 0, 15, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 17, 16, 15, 0, 0, 0, 0, 0, 0, 0,
            1, 1, 1, 1, 1, 1, 1, 0, -1, -1, -1, -1, -1, -1, -1, 0,
            0, 0, 0, 0, 0, 0, -15, -16, -17, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, -15, 0, -16, 0, -17, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, -15, 0, 0, -16, 0, 0, -17, 0, 0, 0, 0, 0,
            0, 0, 0, -15, 0, 0, 0, -16, 0, 0, 0, -17, 0, 0, 0, 0,
            0, 0, -15, 0, 0, 0, 0, -16, 0, 0, 0, 0, -17, 0, 0, 0,
            0, -15, 0, 0, 0, 0, 0, -16, 0, 0, 0, 0, 0, -17, 0, 0,
            -15, 0, 0, 0, 0, 0, 0, -16, 0, 0, 0, 0, 0, 0, -17
        ];
        this.SHIFTS = { p: 0, n: 1, b: 2, r: 3, q: 4, k: 5 };
        this.FLAGS = {
            NORMAL: 'n',
            CAPTURE: 'c',
            BIG_PAWN: 'b',
            EP_CAPTURE: 'e',
            PROMOTION: 'p',
            KSIDE_CASTLE: 'k',
            QSIDE_CASTLE: 'q'
        };
        this.BITS = {
            NORMAL: 1,
            CAPTURE: 2,
            BIG_PAWN: 4,
            EP_CAPTURE: 8,
            PROMOTION: 16,
            KSIDE_CASTLE: 32,
            QSIDE_CASTLE: 64
        };
        this.RANK_1 = 7;
        this.RANK_2 = 6;
        this.RANK_3 = 5;
        this.RANK_4 = 4;
        this.RANK_5 = 3;
        this.RANK_6 = 2;
        this.RANK_7 = 1;
        this.RANK_8 = 0;
        this.SQUARES = {
            a8: 0, b8: 1, c8: 2, d8: 3, e8: 4, f8: 5, g8: 6, h8: 7,
            a7: 16, b7: 17, c7: 18, d7: 19, e7: 20, f7: 21, g7: 22, h7: 23,
            a6: 32, b6: 33, c6: 34, d6: 35, e6: 36, f6: 37, g6: 38, h6: 39,
            a5: 48, b5: 49, c5: 50, d5: 51, e5: 52, f5: 53, g5: 54, h5: 55,
            a4: 64, b4: 65, c4: 66, d4: 67, e4: 68, f4: 69, g4: 70, h4: 71,
            a3: 80, b3: 81, c3: 82, d3: 83, e3: 84, f3: 85, g3: 86, h3: 87,
            a2: 96, b2: 97, c2: 98, d2: 99, e2: 100, f2: 101, g2: 102, h2: 103,
            a1: 112, b1: 113, c1: 114, d1: 115, e1: 116, f1: 117, g1: 118, h1: 119
        };
        this.ROOKS = {
            w: [{ square: this.SQUARES.a1, flag: this.BITS.QSIDE_CASTLE },
                { square: this.SQUARES.h1, flag: this.BITS.KSIDE_CASTLE }],
            b: [{ square: this.SQUARES.a8, flag: this.BITS.QSIDE_CASTLE },
                { square: this.SQUARES.h8, flag: this.BITS.KSIDE_CASTLE }]
        };
        this.board = new Array(128);
        this.kings = { w: this.EMPTY, b: this.EMPTY };
        this.turn = Colour.WHITE;
        this.castling = { w: 0, b: 0 };
        this.ep_square = this.EMPTY;
        this.half_moves = 0;
        this.move_number = 1;
        this.history = [];
        this.header = {};
        /* if the user passes in a fen string, load it, else default to
         * starting position
         */
        if (typeof fen === 'undefined') {
            this.load(this.DEFAULT_POSITION);
        }
        else {
            this.load(fen);
        }
    }
    /**
     * @return {?}
     */
    clear() {
        this.board = new Array(128);
        this.kings = { w: this.EMPTY, b: this.EMPTY };
        this.turn = Colour.WHITE;
        this.castling = { w: 0, b: 0 };
        this.ep_square = this.EMPTY;
        this.half_moves = 0;
        this.move_number = 1;
        this.history = [];
        this.header = {};
        this.update_setup(this.generate_fen());
    }
    /**
     * @return {?}
     */
    reset() {
        this.load(this.DEFAULT_POSITION);
    }
    /**
     * @param {?} fen
     * @return {?}
     */
    load(fen) {
        /** @type {?} */
        const tokens = fen.split(/\s+/);
        /** @type {?} */
        const position = tokens[0];
        /** @type {?} */
        let square = 0;
        if (!this.validate_fen(fen).valid) {
            return false;
        }
        this.clear();
        for (let i = 0; i < position.length; i++) {
            /** @type {?} */
            const piece = position.charAt(i);
            if (piece === '/') {
                square += 8;
            }
            else if (this.is_digit(piece)) {
                square += parseInt(piece, 10);
            }
            else {
                /** @type {?} */
                const color = (piece < 'a') ? Colour.WHITE : Colour.BLACK;
                this.put({ type: piece.toLowerCase(), color: color }, this.algebraic(square));
                square++;
            }
        }
        this.turn = tokens[1];
        if (tokens[2].indexOf('K') > -1) {
            this.castling.w |= this.BITS.KSIDE_CASTLE;
        }
        if (tokens[2].indexOf('Q') > -1) {
            this.castling.w |= this.BITS.QSIDE_CASTLE;
        }
        if (tokens[2].indexOf('k') > -1) {
            this.castling.b |= this.BITS.KSIDE_CASTLE;
        }
        if (tokens[2].indexOf('q') > -1) {
            this.castling.b |= this.BITS.QSIDE_CASTLE;
        }
        this.ep_square = (tokens[3] === '-') ? this.EMPTY : this.SQUARES[tokens[3]];
        this.half_moves = parseInt(tokens[4], 10);
        this.move_number = parseInt(tokens[5], 10);
        this.update_setup(this.generate_fen());
        this.onChange.emit();
        return true;
    }
    /* TODO: this function is pretty much crap - it validates structure but
         * completely ignores content (e.g. doesn't verify that each side has a king)
         * ... we should rewrite this, and ditch the silly error_number field while
         * we're at it
         */
    /**
     * @param {?} fen
     * @return {?}
     */
    validate_fen(fen) {
        /** @type {?} */
        const errors = {
            0: 'No errors.',
            1: 'FEN string must contain six space-delimited fields.',
            2: '6th field (move number) must be a positive integer.',
            3: '5th field (half move counter) must be a non-negative integer.',
            4: '4th field (en-passant square) is invalid.',
            5: '3rd field (castling availability) is invalid.',
            6: '2nd field (side to move) is invalid.',
            7: '1st field (piece positions) does not contain 8 \'/\'-delimited rows.',
            8: '1st field (piece positions) is invalid [consecutive numbers].',
            9: '1st field (piece positions) is invalid [invalid piece].',
            10: '1st field (piece positions) is invalid [row too large].',
            11: 'Illegal en-passant square',
        };
        /* 1st criterion: 6 space-seperated fields? */
        /** @type {?} */
        const tokens = fen.split(/\s+/);
        if (tokens.length !== 6) {
            return { valid: false, error_number: 1, error: errors[1] };
        }
        /* 2nd criterion: move number field is a integer value > 0? */
        if (isNaN(tokens[5]) || (parseInt(tokens[5], 10) <= 0)) {
            return { valid: false, error_number: 2, error: errors[2] };
        }
        /* 3rd criterion: half move counter is an integer >= 0? */
        if (isNaN(tokens[4]) || (parseInt(tokens[4], 10) < 0)) {
            return { valid: false, error_number: 3, error: errors[3] };
        }
        /* 4th criterion: 4th field is a valid e.p.-string? */
        if (!/^(-|[abcdefgh][36])$/.test(tokens[3])) {
            return { valid: false, error_number: 4, error: errors[4] };
        }
        /* 5th criterion: 3th field is a valid castle-string? */
        if (!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(tokens[2])) {
            return { valid: false, error_number: 5, error: errors[5] };
        }
        /* 6th criterion: 2nd field is "w" (white) or "b" (black)? */
        if (!/^(w|b)$/.test(tokens[1])) {
            return { valid: false, error_number: 6, error: errors[6] };
        }
        /* 7th criterion: 1st field contains 8 rows? */
        /** @type {?} */
        const rows = tokens[0].split('/');
        if (rows.length !== 8) {
            return { valid: false, error_number: 7, error: errors[7] };
        }
        /* 8th criterion: every row is valid? */
        for (let i = 0; i < rows.length; i++) {
            /* check for right sum of fields AND not two numbers in succession */
            /** @type {?} */
            let sum_fields = 0;
            /** @type {?} */
            let previous_was_number = false;
            for (let k = 0; k < rows[i].length; k++) {
                if (!isNaN(rows[i][k])) {
                    if (previous_was_number) {
                        return { valid: false, error_number: 8, error: errors[8] };
                    }
                    sum_fields += parseInt(rows[i][k], 10);
                    previous_was_number = true;
                }
                else {
                    if (!/^[prnbqkPRNBQK]$/.test(rows[i][k])) {
                        return { valid: false, error_number: 9, error: errors[9] };
                    }
                    sum_fields += 1;
                    previous_was_number = false;
                }
            }
            if (sum_fields !== 8) {
                return { valid: false, error_number: 10, error: errors[10] };
            }
        }
        if ((tokens[3][1] === '3' && tokens[1] === 'w') ||
            (tokens[3][1] === '6' && tokens[1] === 'b')) {
            return { valid: false, error_number: 11, error: errors[11] };
        }
        /* everything's okay! */
        return { valid: true, error_number: 0, error: errors[0] };
    }
    /**
     * @return {?}
     */
    generate_fen() {
        /** @type {?} */
        let empty = 0;
        /** @type {?} */
        let fen = '';
        for (let i = this.SQUARES.a8; i <= this.SQUARES.h1; i++) {
            if (this.board[i] === undefined) {
                empty++;
            }
            else {
                if (empty > 0) {
                    fen += empty;
                    empty = 0;
                }
                /** @type {?} */
                const color = this.board[i].color;
                /** @type {?} */
                const piece = this.board[i].type;
                fen += (color === Colour.WHITE) ?
                    piece.toUpperCase() : piece.toLowerCase();
            }
            if ((i + 1) & 0x88) {
                if (empty > 0) {
                    fen += empty;
                }
                if (i !== this.SQUARES.h1) {
                    fen += '/';
                }
                empty = 0;
                i += 8;
            }
        }
        /** @type {?} */
        let cflags = '';
        if (this.castling[Colour.WHITE] & this.BITS.KSIDE_CASTLE) {
            cflags += 'K';
        }
        if (this.castling[Colour.WHITE] & this.BITS.QSIDE_CASTLE) {
            cflags += 'Q';
        }
        if (this.castling[Colour.BLACK] & this.BITS.KSIDE_CASTLE) {
            cflags += 'k';
        }
        if (this.castling[Colour.BLACK] & this.BITS.QSIDE_CASTLE) {
            cflags += 'q';
        }
        /* do we have an empty castling flag? */
        cflags = cflags || '-';
        /** @type {?} */
        const epflags = (this.ep_square === this.EMPTY) ? '-' : this.algebraic(this.ep_square);
        return [fen, this.turn, cflags, epflags, this.half_moves, this.move_number].join(' ');
    }
    /**
     * @param {?} args
     * @return {?}
     */
    set_header(args) {
        for (let i = 0; i < args.length; i += 2) {
            if (typeof args[i] === 'string' &&
                typeof args[i + 1] === 'string') {
                this.header[args[i]] = args[i + 1];
            }
        }
        return this.header;
    }
    /* called when the initial board setup is changed with put() or remove().
         * modifies the SetUp and FEN properties of the header object.  if the FEN is
         * equal to the default position, the SetUp and FEN are deleted
         * the setup is only updated if history.length is zero, ie moves haven't been
         * made.
         */
    /**
     * @param {?} fen
     * @return {?}
     */
    update_setup(fen) {
        if (history.length > 0) {
            return;
        }
        if (fen !== this.DEFAULT_POSITION) {
            this.header['SetUp'] = '1';
            this.header['FEN'] = fen;
        }
        else {
            delete this.header['SetUp'];
            delete this.header['FEN'];
        }
    }
    /**
     * @param {?} square
     * @return {?}
     */
    get(square) {
        /** @type {?} */
        const piece = this.board[this.SQUARES[square]];
        return (piece) ? { type: piece.type, color: piece.color } : undefined;
    }
    /**
     * @param {?} piece
     * @param {?} square
     * @return {?}
     */
    put(piece, square) {
        /* check for valid piece object */
        if (!('type' in piece && 'color' in piece)) {
            return false;
        }
        /* check for piece */
        if (this.SYMBOLS.indexOf(piece.type.toLowerCase()) === -1) {
            return false;
        }
        /* check for valid square */
        if (!(square in this.SQUARES)) {
            return false;
        }
        /** @type {?} */
        const sq = this.SQUARES[square];
        /* don't let the user place more than one king */
        if (piece.type === PieceType.KING &&
            !(this.kings[piece.color] === this.EMPTY || this.kings[piece.color] === sq)) {
            return false;
        }
        this.board[sq] = { type: piece.type, color: piece.color };
        if (piece.type === PieceType.KING) {
            this.kings[piece.color] = sq;
        }
        this.update_setup(this.generate_fen());
        return true;
    }
    /**
     * @param {?} square
     * @return {?}
     */
    remove(square) {
        /** @type {?} */
        const piece = this.get(square);
        this.board[this.SQUARES[square]] = undefined;
        if (piece && piece.type === PieceType.KING) {
            this.kings[piece.color] = this.EMPTY;
        }
        this.update_setup(this.generate_fen());
        return piece;
    }
    /**
     * @param {?} board
     * @param {?} from
     * @param {?} to
     * @param {?} flags
     * @param {?=} promotion
     * @return {?}
     */
    build_move(board, from, to, flags, promotion) {
        /** @type {?} */
        const move = {
            color: this.turn,
            from: from,
            to: to,
            flags: flags,
            piece: board[from].type,
            // dgm: these needed to exist for typescript
            promotion: undefined,
            captured: undefined
        };
        if (promotion) {
            move.flags |= this.BITS.PROMOTION;
            move.promotion = promotion;
        }
        if (board[to]) {
            move.captured = board[to].type;
        }
        else if (flags & this.BITS.EP_CAPTURE) {
            move.captured = PieceType.PAWN;
        }
        return move;
    }
    /**
     * @private
     * @param {?} board
     * @param {?} moves
     * @param {?} from
     * @param {?} to
     * @param {?} flags
     * @return {?}
     */
    add_move(board, moves, from, to, flags) {
        /* if pawn promotion */
        if (board[from].type === PieceType.PAWN &&
            (this.rank(to) === this.RANK_8 || this.rank(to) === this.RANK_1)) {
            /** @type {?} */
            const pieces = [PieceType.QUEEN, PieceType.ROOK, PieceType.BISHOP, PieceType.KNIGHT];
            for (let i = 0, len = pieces.length; i < len; i++) {
                moves.push(this.build_move(board, from, to, flags, pieces[i]));
            }
        }
        else {
            moves.push(this.build_move(board, from, to, flags));
        }
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    generate_moves(options) {
        /** @type {?} */
        const moves = [];
        /** @type {?} */
        const us = this.turn;
        /** @type {?} */
        const them = this.swap_color(us);
        /** @type {?} */
        const second_rank = { b: this.RANK_7, w: this.RANK_2 };
        /** @type {?} */
        let first_sq = this.SQUARES.a8;
        /** @type {?} */
        let last_sq = this.SQUARES.h1;
        /** @type {?} */
        let single_square = false;
        /* do we want legal moves? */
        /** @type {?} */
        const legal = (typeof options !== 'undefined' && 'legal' in options) ?
            options.legal : true;
        /* are we generating moves for a single square? */
        if (typeof options !== 'undefined' && 'square' in options) {
            if (options.square in this.SQUARES) {
                first_sq = last_sq = this.SQUARES[options.square];
                single_square = true;
            }
            else {
                /* invalid square */
                return [];
            }
        }
        for (let i = first_sq; i <= last_sq; i++) {
            /* did we run off the end of the board */
            if (i & 0x88) {
                i += 7;
                continue;
            }
            /** @type {?} */
            const piece = this.board[i];
            if (piece === undefined || piece.color !== us) {
                continue;
            }
            if (piece.type === PieceType.PAWN) {
                /* single square, non-capturing */
                /** @type {?} */
                const square1 = i + this.PAWN_OFFSETS[us][0];
                if (this.board[square1] === undefined) {
                    this.add_move(this.board, moves, i, square1, this.BITS.NORMAL);
                    /* double square */
                    /** @type {?} */
                    const square = i + this.PAWN_OFFSETS[us][1];
                    if (second_rank[us] === this.rank(i) && this.board[square] === undefined) {
                        this.add_move(this.board, moves, i, square, this.BITS.BIG_PAWN);
                    }
                }
                /* pawn captures */
                for (let j = 2; j < 4; j++) {
                    /** @type {?} */
                    const square = i + this.PAWN_OFFSETS[us][j];
                    if (square & 0x88) {
                        continue;
                    }
                    if (this.board[square] !== undefined &&
                        this.board[square].color === them) {
                        this.add_move(this.board, moves, i, square, this.BITS.CAPTURE);
                    }
                    else if (square === this.ep_square) {
                        this.add_move(this.board, moves, i, this.ep_square, this.BITS.EP_CAPTURE);
                    }
                }
            }
            else {
                for (let j = 0, len = this.PIECE_OFFSETS[piece.type].length; j < len; j++) {
                    /** @type {?} */
                    const offset = this.PIECE_OFFSETS[piece.type][j];
                    /** @type {?} */
                    let square = i;
                    while (true) {
                        square += offset;
                        if (square & 0x88) {
                            break;
                        }
                        if (this.board[square] === undefined) {
                            this.add_move(this.board, moves, i, square, this.BITS.NORMAL);
                        }
                        else {
                            if (this.board[square].color === us) {
                                break;
                            }
                            this.add_move(this.board, moves, i, square, this.BITS.CAPTURE);
                            break;
                        }
                        /* break, if knight or king */
                        if (piece.type === 'n' || piece.type === 'k') {
                            break;
                        }
                    }
                }
            }
        }
        /* check for castling if: a) we're generating all moves, or b) we're doing
         * single square move generation on the king's square
         */
        if ((!single_square) || last_sq === this.kings[us]) {
            /* king-side castling */
            if (this.castling[us] & this.BITS.KSIDE_CASTLE) {
                /** @type {?} */
                const castling_from = this.kings[us];
                /** @type {?} */
                const castling_to = castling_from + 2;
                if (this.board[castling_from + 1] === undefined &&
                    this.board[castling_to] === undefined &&
                    !this.attacked(them, this.kings[us]) &&
                    !this.attacked(them, castling_from + 1) &&
                    !this.attacked(them, castling_to)) {
                    this.add_move(this.board, moves, this.kings[us], castling_to, this.BITS.KSIDE_CASTLE);
                }
            }
            /* queen-side castling */
            if (this.castling[us] & this.BITS.QSIDE_CASTLE) {
                /** @type {?} */
                const castling_from = this.kings[us];
                /** @type {?} */
                const castling_to = castling_from - 2;
                if (this.board[castling_from - 1] === undefined &&
                    this.board[castling_from - 2] === undefined &&
                    this.board[castling_from - 3] === undefined &&
                    !this.attacked(them, this.kings[us]) &&
                    !this.attacked(them, castling_from - 1) &&
                    !this.attacked(them, castling_to)) {
                    this.add_move(this.board, moves, this.kings[us], castling_to, this.BITS.QSIDE_CASTLE);
                }
            }
        }
        /* return all pseudo-legal moves (this includes moves that allow the king
         * to be captured)
         */
        if (!legal) {
            return moves;
        }
        /* filter out illegal moves */
        /** @type {?} */
        const legal_moves = [];
        for (let i = 0, len = moves.length; i < len; i++) {
            this.make_move(moves[i]);
            if (!this.king_attacked(us)) {
                legal_moves.push(moves[i]);
            }
            this.undo_move();
        }
        return legal_moves;
    }
    /* convert a move from 0x88 coordinates to Standard Algebraic Notation
         * (SAN)
         *
         * @param {boolean} sloppy Use the sloppy SAN generator to work around over
         * disambiguation bugs in Fritz and Chessbase.  See below:
         *
         * r1bqkbnr/ppp2ppp/2n5/1B1pP3/4P3/8/PPPP2PP/RNBQK1NR b KQkq - 2 4
         * 4. ... Nge7 is overly disambiguated because the knight on c6 is pinned
         * 4. ... Ne7 is technically the valid SAN
         */
    /**
     * @param {?} move
     * @param {?=} sloppy
     * @return {?}
     */
    move_to_san(move, sloppy) {
        /** @type {?} */
        let output = '';
        if (move.flags & this.BITS.KSIDE_CASTLE) {
            output = 'O-O';
        }
        else if (move.flags & this.BITS.QSIDE_CASTLE) {
            output = 'O-O-O';
        }
        else {
            /** @type {?} */
            const disambiguator = this.get_disambiguator(move, sloppy);
            if (move.piece !== PieceType.PAWN) {
                output += move.piece.toUpperCase() + disambiguator;
            }
            if (move.flags & (this.BITS.CAPTURE | this.BITS.EP_CAPTURE)) {
                if (move.piece === PieceType.PAWN) {
                    output += this.algebraic(move.from)[0];
                }
                output += 'x';
            }
            output += this.algebraic(move.to);
            if (move.flags & this.BITS.PROMOTION) {
                output += '=' + move.promotion.toUpperCase();
            }
        }
        this.make_move(move);
        if (this.in_check()) {
            if (this.in_checkmate()) {
                output += '#';
            }
            else {
                output += '+';
            }
        }
        this.undo_move();
        return output;
    }
    // parses all of the decorators out of a SAN string
    /**
     * @param {?} move
     * @return {?}
     */
    stripped_san(move) {
        return move.replace(/=/, '').replace(/[+#]?[?!]*$/, '');
    }
    /**
     * @param {?} color
     * @param {?} square
     * @return {?}
     */
    attacked(color, square) {
        for (let i = this.SQUARES.a8; i <= this.SQUARES.h1; i++) {
            /* did we run off the end of the board */
            if (i & 0x88) {
                i += 7;
                continue;
            }
            /* if empty square or wrong color */
            if (this.board[i] === undefined || this.board[i].color !== color) {
                continue;
            }
            /** @type {?} */
            const piece = this.board[i];
            /** @type {?} */
            const difference = i - square;
            /** @type {?} */
            const index = difference + 119;
            if (this.ATTACKS[index] & (1 << this.SHIFTS[piece.type])) {
                if (piece.type === PieceType.PAWN) {
                    if (difference > 0) {
                        if (piece.color === Colour.WHITE) {
                            return true;
                        }
                    }
                    else {
                        if (piece.color === Colour.BLACK) {
                            return true;
                        }
                    }
                    continue;
                }
                /* if the piece is a knight or a king */
                if (piece.type === 'n' || piece.type === 'k') {
                    return true;
                }
                /** @type {?} */
                const offset = this.RAYS[index];
                /** @type {?} */
                let j = i + offset;
                /** @type {?} */
                let blocked = false;
                while (j !== square) {
                    if (this.board[j] !== undefined) {
                        blocked = true;
                        break;
                    }
                    j += offset;
                }
                if (!blocked) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * @param {?} color
     * @return {?}
     */
    king_attacked(color) {
        return this.attacked(this.swap_color(color), this.kings[color]);
    }
    /**
     * @return {?}
     */
    in_check() {
        return this.king_attacked(this.turn);
    }
    /**
     * @return {?}
     */
    in_checkmate() {
        return this.in_check() && this.generate_moves().length === 0;
    }
    /**
     * @return {?}
     */
    in_stalemate() {
        return !this.in_check() && this.generate_moves().length === 0;
    }
    /**
     * @return {?}
     */
    insufficient_material() {
        /** @type {?} */
        const pieces = {};
        /** @type {?} */
        const bishops = [];
        /** @type {?} */
        let num_pieces = 0;
        /** @type {?} */
        let sq_color = 0;
        for (let i = this.SQUARES.a8; i <= this.SQUARES.h1; i++) {
            sq_color = (sq_color + 1) % 2;
            if (i & 0x88) {
                i += 7;
                continue;
            }
            /** @type {?} */
            const piece = this.board[i];
            if (piece) {
                pieces[piece.type] = (piece.type in pieces) ?
                    pieces[piece.type] + 1 : 1;
                if (piece.type === PieceType.BISHOP) {
                    bishops.push(sq_color);
                }
                num_pieces++;
            }
        }
        /* k vs. k */
        if (num_pieces === 2) {
            return true;
        }
        else if (num_pieces === 3 && (pieces[PieceType.BISHOP] === 1 ||
            pieces[PieceType.KNIGHT] === 1)) {
            return true;
        }
        else if (num_pieces === pieces[PieceType.BISHOP] + 2) {
            /** @type {?} */
            let sum = 0;
            /** @type {?} */
            const len = bishops.length;
            for (let i = 0; i < len; i++) {
                sum += bishops[i];
            }
            if (sum === 0 || sum === len) {
                return true;
            }
        }
        return false;
    }
    /**
     * @return {?}
     */
    in_threefold_repetition() {
        /* TODO: while this function is fine for casual use, a better
                 * implementation would use a Zobrist key (instead of FEN). the
                 * Zobrist key would be maintained in the make_move/undo_move functions,
                 * avoiding the costly that we do below.
                 */
        /** @type {?} */
        const moves = [];
        /** @type {?} */
        const positions = {};
        /** @type {?} */
        let repetition = false;
        while (true) {
            /** @type {?} */
            const move = this.undo_move();
            if (!move) {
                break;
            }
            moves.push(move);
        }
        while (true) {
            /* remove the last two fields in the FEN string, they're not needed
                         * when checking for draw by rep */
            /** @type {?} */
            const fen = this.generate_fen().split(' ').slice(0, 4).join(' ');
            /* has the position occurred three or move times */
            positions[fen] = (fen in positions) ? positions[fen] + 1 : 1;
            if (positions[fen] >= 3) {
                repetition = true;
            }
            if (!moves.length) {
                break;
            }
            this.make_move(moves.pop());
        }
        return repetition;
    }
    /**
     * @param {?} move
     * @return {?}
     */
    push(move) {
        this.history.push({
            move: move,
            kings: { b: this.kings.b, w: this.kings.w },
            turn: this.turn,
            castling: { b: this.castling.b, w: this.castling.w },
            ep_square: this.ep_square,
            half_moves: this.half_moves,
            move_number: this.move_number
        });
    }
    /**
     * @param {?} move
     * @return {?}
     */
    make_move(move) {
        /** @type {?} */
        const us = this.turn;
        /** @type {?} */
        const them = this.swap_color(us);
        this.push(move);
        this.board[move.to] = this.board[move.from];
        this.board[move.from] = undefined;
        /* if ep capture, remove the captured pawn */
        if (move.flags & this.BITS.EP_CAPTURE) {
            if (this.turn === Colour.BLACK) {
                this.board[move.to - 16] = undefined;
            }
            else {
                this.board[move.to + 16] = undefined;
            }
        }
        /* if pawn promotion, replace with new piece */
        if (move.flags & this.BITS.PROMOTION) {
            this.board[move.to] = { type: move.promotion, color: us };
        }
        /* if we moved the king */
        if (this.board[move.to].type === PieceType.KING) {
            this.kings[this.board[move.to].color] = move.to;
            /* if we castled, move the rook next to the king */
            if (move.flags & this.BITS.KSIDE_CASTLE) {
                /** @type {?} */
                const castling_to = move.to - 1;
                /** @type {?} */
                const castling_from = move.to + 1;
                this.board[castling_to] = this.board[castling_from];
                this.board[castling_from] = undefined;
            }
            else if (move.flags & this.BITS.QSIDE_CASTLE) {
                /** @type {?} */
                const castling_to2 = move.to + 1;
                /** @type {?} */
                const castling_from2 = move.to - 2;
                this.board[castling_to2] = this.board[castling_from2];
                this.board[castling_from2] = undefined;
            }
            /* turn off castling */
            this.castling[us] = '';
        }
        /* turn off castling if we move a rook */
        if (this.castling[us]) {
            for (let i = 0, len = this.ROOKS[us].length; i < len; i++) {
                if (move.from === this.ROOKS[us][i].square &&
                    this.castling[us] & this.ROOKS[us][i].flag) {
                    this.castling[us] ^= this.ROOKS[us][i].flag;
                    break;
                }
            }
        }
        /* turn off castling if we capture a rook */
        if (this.castling[them]) {
            for (let i = 0, len = this.ROOKS[them].length; i < len; i++) {
                if (move.to === this.ROOKS[them][i].square &&
                    this.castling[them] & this.ROOKS[them][i].flag) {
                    this.castling[them] ^= this.ROOKS[them][i].flag;
                    break;
                }
            }
        }
        /* if big pawn move, update the en passant square */
        if (move.flags & this.BITS.BIG_PAWN) {
            if (this.turn === 'b') {
                this.ep_square = move.to - 16;
            }
            else {
                this.ep_square = move.to + 16;
            }
        }
        else {
            this.ep_square = this.EMPTY;
        }
        /* reset the 50 move counter if a pawn is moved or a piece is captured */
        if (move.piece === PieceType.PAWN) {
            this.half_moves = 0;
        }
        else if (move.flags & (this.BITS.CAPTURE | this.BITS.EP_CAPTURE)) {
            this.half_moves = 0;
        }
        else {
            this.half_moves++;
        }
        if (this.turn === Colour.BLACK) {
            this.move_number++;
        }
        this.turn = this.swap_color(this.turn);
    }
    /**
     * @return {?}
     */
    undo_move() {
        /** @type {?} */
        const old = this.history.pop();
        if (old === undefined) {
            return undefined;
        }
        /** @type {?} */
        const move = old.move;
        this.kings = old.kings;
        this.turn = old.turn;
        this.castling = old.castling;
        this.ep_square = old.ep_square;
        this.half_moves = old.half_moves;
        this.move_number = old.move_number;
        /** @type {?} */
        const us = this.turn;
        /** @type {?} */
        const them = this.swap_color(this.turn);
        this.board[move.from] = this.board[move.to];
        this.board[move.from].type = move.piece; // to undo any promotions
        this.board[move.to] = undefined;
        if (move.flags & this.BITS.CAPTURE) {
            this.board[move.to] = { type: move.captured, color: them };
        }
        else if (move.flags & this.BITS.EP_CAPTURE) {
            /** @type {?} */
            let index;
            if (us === Colour.BLACK) {
                index = move.to - 16;
            }
            else {
                index = move.to + 16;
            }
            this.board[index] = { type: PieceType.PAWN, color: them };
        }
        if (move.flags & (this.BITS.KSIDE_CASTLE | this.BITS.QSIDE_CASTLE)) {
            /** @type {?} */
            let castling_to;
            /** @type {?} */
            let castling_from;
            if (move.flags & this.BITS.KSIDE_CASTLE) {
                castling_to = move.to + 1;
                castling_from = move.to - 1;
            }
            else if (move.flags & this.BITS.QSIDE_CASTLE) {
                castling_to = move.to - 2;
                castling_from = move.to + 1;
            }
            this.board[castling_to] = this.board[castling_from];
            this.board[castling_from] = undefined;
        }
        return move;
    }
    /* this function is used to uniquely identify ambiguous moves */
    /**
     * @param {?} move
     * @param {?} sloppy
     * @return {?}
     */
    get_disambiguator(move, sloppy) {
        /** @type {?} */
        const moves = this.generate_moves({ legal: !sloppy });
        /** @type {?} */
        const from = move.from;
        /** @type {?} */
        const to = move.to;
        /** @type {?} */
        const piece = move.piece;
        /** @type {?} */
        let ambiguities = 0;
        /** @type {?} */
        let same_rank = 0;
        /** @type {?} */
        let same_file = 0;
        for (let i = 0, len = moves.length; i < len; i++) {
            /** @type {?} */
            const ambig_from = moves[i].from;
            /** @type {?} */
            const ambig_to = moves[i].to;
            /** @type {?} */
            const ambig_piece = moves[i].piece;
            /* if a move of the same piece type ends on the same to square, we'll
             * need to add a disambiguator to the algebraic notation
             */
            if (piece === ambig_piece && from !== ambig_from && to === ambig_to) {
                ambiguities++;
                if (this.rank(from) === this.rank(ambig_from)) {
                    same_rank++;
                }
                if (this.file(from) === this.file(ambig_from)) {
                    same_file++;
                }
            }
        }
        if (ambiguities > 0) {
            /* if there exists a similar moving piece on the same rank and file as
             * the move in question, use the square as the disambiguator
             */
            if (same_rank > 0 && same_file > 0) {
                return this.algebraic(from);
            }
            else if (same_file > 0) {
                return this.algebraic(from).charAt(1);
            }
            else {
                return this.algebraic(from).charAt(0);
            }
        }
        return '';
    }
    /**
     * @return {?}
     */
    ascii() {
        /** @type {?} */
        let s = '   +------------------------+\n';
        for (let i = this.SQUARES.a8; i <= this.SQUARES.h1; i++) {
            /* display the rank */
            if (this.file(i) === 0) {
                s += ' ' + '87654321'[this.rank(i)] + ' |';
            }
            /* empty piece */
            if (this.board[i] === undefined) {
                s += ' . ';
            }
            else {
                /** @type {?} */
                const piece = this.board[i].type;
                /** @type {?} */
                const color = this.board[i].color;
                /** @type {?} */
                const symbol = (color === Colour.WHITE) ?
                    piece.toUpperCase() : piece.toLowerCase();
                s += ' ' + symbol + ' ';
            }
            if ((i + 1) & 0x88) {
                s += '|\n';
                i += 8;
            }
        }
        s += '   +------------------------+\n';
        s += '     a  b  c  d  e  f  g  h\n';
        return s;
    }
    // convert a move from Standard Algebraic Notation (SAN) to 0x88 coordinates
    /**
     * @param {?} move
     * @param {?} sloppy
     * @return {?}
     */
    move_from_san(move, sloppy) {
        // strip off any move decorations: e.g Nf3+?!
        /** @type {?} */
        const clean_move = this.stripped_san(move);
        // if we're using the sloppy parser run a regex to grab piece, to, and from
        // this should parse invalid SAN like: Pe2-e4, Rc1c4, Qf3xf7
        /** @type {?} */
        const matches = clean_move.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);
        /** @type {?} */
        let piece;
        /** @type {?} */
        let from;
        /** @type {?} */
        let to;
        /** @type {?} */
        let promotion;
        if (sloppy) {
            if (matches) {
                piece = matches[1];
                from = matches[2];
                to = matches[3];
                promotion = matches[4];
            }
        }
        /** @type {?} */
        const moves = this.generate_moves();
        for (let i = 0, len = moves.length; i < len; i++) {
            // try the strict parser first, then the sloppy parser if requested
            // by the user
            if ((clean_move === this.stripped_san(this.move_to_san(moves[i]))) ||
                (sloppy && clean_move === this.stripped_san(this.move_to_san(moves[i], true)))) {
                return moves[i];
            }
            else {
                if (matches &&
                    (!piece || piece.toLowerCase() === moves[i].piece) &&
                    this.SQUARES[from] === moves[i].from &&
                    this.SQUARES[to] === moves[i].to &&
                    (!promotion || promotion.toLowerCase() === moves[i].promotion)) {
                    return moves[i];
                }
            }
        }
        return undefined;
    }
    /**
     * **************************************************************************
     * UTILITY FUNCTIONS
     * **************************************************************************
     * @param {?} i
     * @return {?}
     */
    rank(i) {
        return i >> 4;
    }
    /**
     * @param {?} i
     * @return {?}
     */
    file(i) {
        return i & 15;
    }
    /**
     * @param {?} i
     * @return {?}
     */
    algebraic(i) {
        /** @type {?} */
        const f = this.file(i);
        /** @type {?} */
        const r = this.rank(i);
        return 'abcdefgh'.substring(f, f + 1) + '87654321'.substring(r, r + 1);
    }
    /**
     * @param {?} c
     * @return {?}
     */
    swap_color(c) {
        return c === Colour.WHITE ? Colour.BLACK : Colour.WHITE;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    is_digit(c) {
        return '0123456789'.indexOf(c) !== -1;
    }
    /* pretty = external move object */
    /**
     * @param {?} ugly_move
     * @return {?}
     */
    make_pretty(ugly_move) {
        /** @type {?} */
        const move = this.clone(ugly_move);
        move.san = this.move_to_san(move, false);
        move.to = this.algebraic(move.to);
        move.from = this.algebraic(move.from);
        /** @type {?} */
        let flags = '';
        for (const flag in this.BITS) {
            if (this.BITS[flag] & move.flags) {
                flags += this.FLAGS[flag];
            }
        }
        move.flags = flags;
        return move;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    clone(obj) {
        /** @type {?} */
        const dupe = (obj instanceof Array) ? [] : {};
        for (const property in obj) {
            if (typeof property === 'object') {
                dupe[property] = this.clone(obj[property]);
            }
            else {
                dupe[property] = obj[property];
            }
        }
        return dupe;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    trim(str) {
        return str.replace(/^\s+|\s+$/g, '');
    }
    /**
     * **************************************************************************
     * DEBUGGING UTILITIES
     * **************************************************************************
     * @param {?} depth
     * @return {?}
     */
    perft(depth) {
        /** @type {?} */
        const moves = this.generate_moves({ legal: false });
        /** @type {?} */
        let nodes = 0;
        /** @type {?} */
        const color = this.turn;
        for (let i = 0, len = moves.length; i < len; i++) {
            this.make_move(moves[i]);
            if (!this.king_attacked(color)) {
                if (depth - 1 > 0) {
                    /** @type {?} */
                    const child_nodes = this.perft(depth - 1);
                    nodes += child_nodes;
                }
                else {
                    nodes++;
                }
            }
            this.undo_move();
        }
        return nodes;
    }
    /**
     * @return {?}
     */
    getSquares() {
        /* from the ECMA-262 spec (section 12.6.4):
                 * "The mechanics of enumerating the properties ... is
                 * implementation dependent"
                 * so: for (var sq in SQUARES) { keys.push(sq); } might not be
                 * ordered correctly
                 */
        /** @type {?} */
        const keys = [];
        for (let i = this.SQUARES.a8; i <= this.SQUARES.h1; i++) {
            if (i & 0x88) {
                i += 7;
                continue;
            }
            keys.push(this.algebraic(i));
        }
        return keys;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    getMoves(options) {
        /* The internal representation of a chess move is in 0x88 format, and
                 * not meant to be human-readable.  The code below converts the 0x88
                 * square coordinates to algebraic coordinates.  It also prunes an
                 * unnecessary move keys resulting from a verbose call.
                 */
        /* The internal representation of a chess move is in 0x88 format, and
                         * not meant to be human-readable.  The code below converts the 0x88
                         * square coordinates to algebraic coordinates.  It also prunes an
                         * unnecessary move keys resulting from a verbose call.
                         */
        /** @type {?} */
        const ugly_moves = this.generate_moves(options);
        /** @type {?} */
        const moves = [];
        for (let i = 0, len = ugly_moves.length; i < len; i++) {
            /* does the user want a full move object (most likely not), or just
             * SAN
             */
            if (typeof options !== 'undefined' && 'verbose' in options &&
                options.verbose) {
                moves.push(this.make_pretty(ugly_moves[i]));
            }
            else {
                moves.push(this.move_to_san(ugly_moves[i], false));
            }
        }
        return moves;
    }
    /**
     * @return {?}
     */
    get in_draw() {
        return this.half_moves >= 100 ||
            this.in_stalemate() ||
            this.insufficient_material() ||
            this.in_threefold_repetition();
    }
    /**
     * @return {?}
     */
    get game_over() {
        return this.half_moves >= 100 ||
            this.in_checkmate() ||
            this.in_stalemate() ||
            this.insufficient_material() ||
            this.in_threefold_repetition();
    }
    /**
     * @return {?}
     */
    get fen() {
        return this.generate_fen();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    getPgn(options) {
        /* using the specification from http://www.chessclub.com/help/PGN-spec
                         * example for html usage: .pgn({ max_width: 72, newline_char: "<br />" })
                         */
        /** @type {?} */
        const newline = (typeof options === 'object' &&
            typeof options.newline_char === 'string') ?
            options.newline_char : '\n';
        /** @type {?} */
        const max_width = (typeof options === 'object' &&
            typeof options.max_width === 'number') ?
            options.max_width : 0;
        /** @type {?} */
        const result = [];
        /** @type {?} */
        let header_exists = false;
        /* add the PGN header headerrmation */
        for (const i in this.header) {
            /* TODO: order of enumerated properties in header object is not
             * guaranteed, see ECMA-262 spec (section 12.6.4)
             */
            result.push('[' + i + ' \"' + this.header[i] + '\"]' + newline);
            header_exists = true;
        }
        if (header_exists && history.length) {
            result.push(newline);
        }
        /* pop all of history onto reversed_history */
        /** @type {?} */
        const reversed_history = [];
        while (history.length > 0) {
            reversed_history.push(this.undo_move());
        }
        /** @type {?} */
        const moves = [];
        /** @type {?} */
        let move_string = '';
        /* build the list of moves.  a move_string looks like: "3. e3 e6" */
        while (reversed_history.length > 0) {
            /** @type {?} */
            const move = reversed_history.pop();
            /* if the position started with black to move, start PGN with 1. ... */
            if (!history.length && move.color === 'b') {
                move_string = this.move_number + '. ...';
            }
            else if (move.color === 'w') {
                /* store the previous generated move_string if we have one */
                if (move_string.length) {
                    moves.push(move_string);
                }
                move_string = this.move_number + '.';
            }
            move_string = move_string + ' ' + this.move_to_san(move, false);
            this.make_move(move);
        }
        /* are there any other leftover moves? */
        if (move_string.length) {
            moves.push(move_string);
        }
        /* is there a result? */
        if (typeof this.header.Result !== 'undefined') {
            moves.push(this.header.Result);
        }
        /* history should be back to what is was before we started generating PGN,
         * so join together moves
         */
        if (max_width === 0) {
            return result.join('') + moves.join(' ');
        }
        /* wrap the PGN output at max_width */
        /** @type {?} */
        let current_width = 0;
        for (let i2 = 0; i2 < moves.length; i2++) {
            /* if the current move will push past max_width */
            if (current_width + moves[i2].length > max_width && i2 !== 0) {
                /* don't end the line with whitespace */
                if (result[result.length - 1] === ' ') {
                    result.pop();
                }
                result.push(newline);
                current_width = 0;
            }
            else if (i2 !== 0) {
                result.push(' ');
                current_width++;
            }
            result.push(moves[i2]);
            current_width += moves[i2].length;
        }
        return result.join('');
    }
    /**
     * @param {?} pgn
     * @param {?} options
     * @return {?}
     */
    load_pgn(pgn, options) {
        // allow the user to specify the sloppy move parser to work around over
        // disambiguation bugs in Fritz and Chessbase
        /** @type {?} */
        const sloppy = (typeof options !== 'undefined' && 'sloppy' in options) ?
            options.sloppy : false;
        /**
         * @param {?} str
         * @return {?}
         */
        function mask(str) {
            return str.replace(/\\/g, '\\');
        }
        /**
         * @param {?} object
         * @return {?}
         */
        function has_keys(object) {
            for (const key in object) {
                return true;
            }
            return false;
        }
        /**
         * @param {?} header
         * @param {?} hOptions
         * @return {?}
         */
        function parse_pgn_header(header, hOptions) {
            /** @type {?} */
            const hNewline_char = (typeof hOptions === 'object' &&
                typeof hOptions.newline_char === 'string') ?
                hOptions.newline_char : '\r?\n';
            /** @type {?} */
            const header_obj = {};
            /** @type {?} */
            const lHeaders = header.split(new RegExp(mask(hNewline_char)));
            /** @type {?} */
            let key = '';
            /** @type {?} */
            let value = '';
            for (let i = 0; i < lHeaders.length; i++) {
                key = lHeaders[i].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/, '$1');
                value = lHeaders[i].replace(/^\[[A-Za-z]+\s"(.*)"\]$/, '$1');
                if (this.trim(key).length > 0) {
                    header_obj[key] = value;
                }
            }
            return header_obj;
        }
        /** @type {?} */
        const newline_char = (typeof options === 'object' &&
            typeof options.newline_char === 'string') ?
            options.newline_char : '\r?\n';
        /** @type {?} */
        const regex = new RegExp('^(\\[(.|' + mask(newline_char) + ')*\\])' +
            '(' + mask(newline_char) + ')*' +
            '1.(' + mask(newline_char) + '|.)*$', 'g');
        /* get header part of the PGN file */
        /** @type {?} */
        let header_string = pgn.replace(regex, '$1');
        /* no info part given, begins with moves */
        if (header_string[0] !== '[') {
            header_string = '';
        }
        this.reset();
        /* parse PGN header */
        /** @type {?} */
        const headers = parse_pgn_header(header_string, options);
        for (const key in headers) {
            this.set_header([key, headers[key]]);
        }
        /* load the starting position indicated by [Setup '1'] and
        * [FEN position] */
        if (headers['SetUp'] === '1') {
            if (!(('FEN' in headers) && this.load(headers['FEN']))) {
                return false;
            }
        }
        /* delete header to get the moves */
        /** @type {?} */
        let ms = pgn.replace(header_string, '').replace(new RegExp(mask(newline_char), 'g'), ' ');
        /* delete comments */
        ms = ms.replace(/(\{[^}]+\})+?/g, '');
        /* delete recursive annotation variations */
        /** @type {?} */
        const rav_regex = /(\([^\(\)]+\))+?/g;
        while (rav_regex.test(ms)) {
            ms = ms.replace(rav_regex, '');
        }
        /* delete move numbers */
        ms = ms.replace(/\d+\.(\.\.)?/g, '');
        /* delete ... indicating black to move */
        ms = ms.replace(/\.\.\./g, '');
        /* delete numeric annotation glyphs */
        ms = ms.replace(/\$\d+/g, '');
        /* trim and get array of moves */
        /** @type {?} */
        let moves = this.trim(ms).split(new RegExp(/\s+/));
        /* delete empty entries */
        moves = moves.join(',').replace(/,,+/g, ',').split(',');
        /** @type {?} */
        let move = '';
        for (let half_move = 0; half_move < moves.length - 1; half_move++) {
            move = this.move_from_san(moves[half_move], sloppy);
            /* move not possible! (don't clear the board to examine to show the
             * latest valid position)
             */
            if (move === undefined) {
                return false;
            }
            else {
                this.make_move(move);
            }
        }
        /* examine last move */
        move = moves[moves.length - 1];
        if (this.POSSIBLE_RESULTS.indexOf(move) > -1) {
            if (has_keys(this.header) && typeof this.header.Result === 'undefined') {
                this.set_header(['Result', move]);
            }
        }
        else {
            move = this.move_from_san(move, sloppy);
            if (move === undefined) {
                return false;
            }
            else {
                this.make_move(move);
            }
        }
        return true;
    }
    /**
     * @return {?}
     */
    getHeader() {
        return this.set_header(arguments);
    }
    /**
     * @param {?} move
     * @param {?=} options
     * @return {?}
     */
    move(move, options) {
        /* The move function can be called with in the following parameters:
                 *
                 * .move('Nxb7')      <- where 'move' is a case-sensitive SAN string
                 *
                 * .move({ from: 'h7', <- where the 'move' is a move object (additional
                 *         to :'h8',      fields are ignored)
                 *         promotion: 'q',
                 *      })
                 */
        /* The move function can be called with in the following parameters:
                         *
                         * .move('Nxb7')      <- where 'move' is a case-sensitive SAN string
                         *
                         * .move({ from: 'h7', <- where the 'move' is a move object (additional
                         *         to :'h8',      fields are ignored)
                         *         promotion: 'q',
                         *      })
                         */
        // allow the user to specify the sloppy move parser to work around over
        // disambiguation bugs in Fritz and Chessbase
        /** @type {?} */
        const sloppy = (typeof options !== 'undefined' && 'sloppy' in options) ?
            options.sloppy : false;
        /** @type {?} */
        let move_obj;
        if (typeof move === 'string') {
            move_obj = this.move_from_san(move, sloppy);
        }
        else if (typeof move === 'object') {
            /** @type {?} */
            const moves = this.generate_moves();
            /* convert the pretty move object to an ugly move object */
            for (let i = 0, len = moves.length; i < len; i++) {
                if (move.from === this.algebraic(moves[i].from) &&
                    move.to === this.algebraic(moves[i].to) &&
                    (!('promotion' in moves[i]) ||
                        move.promotion === moves[i].promotion)) {
                    move_obj = moves[i];
                    break;
                }
            }
        }
        /* failed to find move */
        if (!move_obj) {
            return undefined;
        }
        /* need to make a copy of move because we can't generate SAN after the
                 * move is made
                 */
        /** @type {?} */
        const pretty_move = this.make_pretty(move_obj);
        this.make_move(move_obj);
        this.onChange.emit();
        return pretty_move;
    }
    /**
     * @return {?}
     */
    undo() {
        /** @type {?} */
        const move = this.undo_move();
        this.onChange.emit();
        return (move) ? this.make_pretty(move) : undefined;
    }
    /**
     * @param {?} square
     * @return {?}
     */
    square_color(square) {
        if (square in this.SQUARES) {
            /** @type {?} */
            const sq_0x88 = this.SQUARES[square];
            return ((this.rank(sq_0x88) + this.file(sq_0x88)) % 2 === 0) ? 'light' : 'dark';
        }
        return undefined;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    getHistory(options) {
        /** @type {?} */
        const reversed_history = [];
        /** @type {?} */
        const move_history = [];
        /** @type {?} */
        const verbose = (typeof options !== 'undefined' && 'verbose' in options &&
            options.verbose);
        while (history.length > 0) {
            reversed_history.push(this.undo_move());
        }
        while (reversed_history.length > 0) {
            /** @type {?} */
            const move = reversed_history.pop();
            if (verbose) {
                move_history.push(this.make_pretty(move));
            }
            else {
                move_history.push(this.move_to_san(move));
            }
            this.make_move(move);
        }
        return move_history;
    }
} // End of Chess class
if (false) {
    /** @type {?} */
    Chess.prototype.EMPTY;
    /** @type {?} */
    Chess.prototype.onChange;
    /** @type {?} */
    Chess.prototype.SYMBOLS;
    /** @type {?} */
    Chess.prototype.DEFAULT_POSITION;
    /** @type {?} */
    Chess.prototype.POSSIBLE_RESULTS;
    /** @type {?} */
    Chess.prototype.PAWN_OFFSETS;
    /** @type {?} */
    Chess.prototype.PIECE_OFFSETS;
    /** @type {?} */
    Chess.prototype.ATTACKS;
    /** @type {?} */
    Chess.prototype.RAYS;
    /** @type {?} */
    Chess.prototype.SHIFTS;
    /** @type {?} */
    Chess.prototype.FLAGS;
    /** @type {?} */
    Chess.prototype.BITS;
    /** @type {?} */
    Chess.prototype.RANK_1;
    /** @type {?} */
    Chess.prototype.RANK_2;
    /** @type {?} */
    Chess.prototype.RANK_3;
    /** @type {?} */
    Chess.prototype.RANK_4;
    /** @type {?} */
    Chess.prototype.RANK_5;
    /** @type {?} */
    Chess.prototype.RANK_6;
    /** @type {?} */
    Chess.prototype.RANK_7;
    /** @type {?} */
    Chess.prototype.RANK_8;
    /** @type {?} */
    Chess.prototype.SQUARES;
    /** @type {?} */
    Chess.prototype.ROOKS;
    /** @type {?} */
    Chess.prototype.board;
    /** @type {?} */
    Chess.prototype.kings;
    /** @type {?} */
    Chess.prototype.turn;
    /** @type {?} */
    Chess.prototype.castling;
    /** @type {?} */
    Chess.prototype.ep_square;
    /** @type {?} */
    Chess.prototype.half_moves;
    /** @type {?} */
    Chess.prototype.move_number;
    /** @type {?} */
    Chess.prototype.history;
    /** @type {?} */
    Chess.prototype.header;
}
// End of Chess class
export class FenValidationResult {
}
if (false) {
    /** @type {?} */
    FenValidationResult.prototype.valid;
    /** @type {?} */
    FenValidationResult.prototype.error_number;
    /** @type {?} */
    FenValidationResult.prototype.error;
}
export class ChessPiece {
}
if (false) {
    /** @type {?} */
    ChessPiece.prototype.color;
    /** @type {?} */
    ChessPiece.prototype.type;
}
// enum Colour {
//     WHITE = 'w',
//     BLACK = 'b'
// }
class Castling {
}
if (false) {
    /** @type {?} */
    Castling.prototype.w;
    /** @type {?} */
    Castling.prototype.b;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jaGVzcy10cy8iLCJzb3VyY2VzIjpbImxpYi9jaGVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3QyxNQUFNLE9BQU8sS0FBSzs7OztJQXdIZCxZQUFZLEdBQVk7UUF0SGpCLFVBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNYLGFBQVEsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUcvRCxZQUFPLEdBQUcsY0FBYyxDQUFDO1FBRXpCLHFCQUFnQixHQUFHLDBEQUEwRCxDQUFDO1FBRTlFLHFCQUFnQixHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFbEQsaUJBQVksR0FBRztZQUNYLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNuQixDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUMxQixDQUFDO1FBRUYsa0JBQWEsR0FBRztZQUNaLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUN2QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ3JCLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN4QyxDQUFDO1FBRUYsWUFBTyxHQUFHO1lBQ04sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNqRCxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2pELENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDakQsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNqRCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2pELENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDakQsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNqRCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQzVELENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDakQsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNqRCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2pELENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDakQsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNqRCxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2pELEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtTQUNqRCxDQUFDO1FBRUYsU0FBSSxHQUFHO1lBQ0gsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNqRCxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2pELENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDakQsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNqRCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2pELENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDakQsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNqRCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDckQsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNwRCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3BELENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDcEQsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNwRCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3BELENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDcEQsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1NBQ3BELENBQUM7UUFFRixXQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBRXpDLFVBQUssR0FBRztZQUNYLE1BQU0sRUFBRSxHQUFHO1lBQ1gsT0FBTyxFQUFFLEdBQUc7WUFDWixRQUFRLEVBQUUsR0FBRztZQUNiLFVBQVUsRUFBRSxHQUFHO1lBQ2YsU0FBUyxFQUFFLEdBQUc7WUFDZCxZQUFZLEVBQUUsR0FBRztZQUNqQixZQUFZLEVBQUUsR0FBRztTQUNwQixDQUFDO1FBRUYsU0FBSSxHQUFHO1lBQ0gsTUFBTSxFQUFFLENBQUM7WUFDVCxPQUFPLEVBQUUsQ0FBQztZQUNWLFFBQVEsRUFBRSxDQUFDO1lBQ1gsVUFBVSxFQUFFLENBQUM7WUFDYixTQUFTLEVBQUUsRUFBRTtZQUNiLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFlBQVksRUFBRSxFQUFFO1NBQ25CLENBQUM7UUFFRixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUVYLFlBQU8sR0FBRztZQUNOLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDdEQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUM5RCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO1lBQzlELEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDOUQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUM5RCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO1lBQzlELEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUc7WUFDbEUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcs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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sb3VyLCBQaWVjZVR5cGUsIE1vdmUgfSBmcm9tICcuL2NoZXNzLWVudW1zJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQ2hlc3Mge1xuXG4gICAgcHVibGljIEVNUFRZID0gLTE7XG4gICAgcHVibGljIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblxuICAgIFNZTUJPTFMgPSAncG5icnFrUE5CUlFLJztcblxuICAgIERFRkFVTFRfUE9TSVRJT04gPSAncm5icWtibnIvcHBwcHBwcHAvOC84LzgvOC9QUFBQUFBQUC9STkJRS0JOUiB3IEtRa3EgLSAwIDEnO1xuXG4gICAgUE9TU0lCTEVfUkVTVUxUUyA9IFsnMS0wJywgJzAtMScsICcxLzItMS8yJywgJyonXTtcblxuICAgIFBBV05fT0ZGU0VUUyA9IHtcbiAgICAgICAgYjogWzE2LCAzMiwgMTcsIDE1XSxcbiAgICAgICAgdzogWy0xNiwgLTMyLCAtMTcsIC0xNV1cbiAgICB9O1xuXG4gICAgUElFQ0VfT0ZGU0VUUyA9IHtcbiAgICAgICAgbjogWy0xOCwgLTMzLCAtMzEsIC0xNCwgMTgsIDMzLCAzMSwgMTRdLFxuICAgICAgICBiOiBbLTE3LCAtMTUsIDE3LCAxNV0sXG4gICAgICAgIHI6IFstMTYsIDEsIDE2LCAtMV0sXG4gICAgICAgIHE6IFstMTcsIC0xNiwgLTE1LCAxLCAxNywgMTYsIDE1LCAtMV0sXG4gICAgICAgIGs6IFstMTcsIC0xNiwgLTE1LCAxLCAxNywgMTYsIDE1LCAtMV1cbiAgICB9O1xuXG4gICAgQVRUQUNLUyA9IFtcbiAgICAgICAgMjAsIDAsIDAsIDAsIDAsIDAsIDAsIDI0LCAwLCAwLCAwLCAwLCAwLCAwLCAyMCwgMCxcbiAgICAgICAgMCwgMjAsIDAsIDAsIDAsIDAsIDAsIDI0LCAwLCAwLCAwLCAwLCAwLCAyMCwgMCwgMCxcbiAgICAgICAgMCwgMCwgMjAsIDAsIDAsIDAsIDAsIDI0LCAwLCAwLCAwLCAwLCAyMCwgMCwgMCwgMCxcbiAgICAgICAgMCwgMCwgMCwgMjAsIDAsIDAsIDAsIDI0LCAwLCAwLCAwLCAyMCwgMCwgMCwgMCwgMCxcbiAgICAgICAgMCwgMCwgMCwgMCwgMjAsIDAsIDAsIDI0LCAwLCAwLCAyMCwgMCwgMCwgMCwgMCwgMCxcbiAgICAgICAgMCwgMCwgMCwgMCwgMCwgMjAsIDIsIDI0LCAyLCAyMCwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgICAgICAgMCwgMCwgMCwgMCwgMCwgMiwgNTMsIDU2LCA1MywgMiwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgICAgICAgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgNTYsIDAsIDU2LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAwLFxuICAgICAgICAwLCAwLCAwLCAwLCAwLCAyLCA1MywgNTYsIDUzLCAyLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgICAgICAwLCAwLCAwLCAwLCAwLCAyMCwgMiwgMjQsIDIsIDIwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgICAgICAwLCAwLCAwLCAwLCAyMCwgMCwgMCwgMjQsIDAsIDAsIDIwLCAwLCAwLCAwLCAwLCAwLFxuICAgICAgICAwLCAwLCAwLCAyMCwgMCwgMCwgMCwgMjQsIDAsIDAsIDAsIDIwLCAwLCAwLCAwLCAwLFxuICAgICAgICAwLCAwLCAyMCwgMCwgMCwgMCwgMCwgMjQsIDAsIDAsIDAsIDAsIDIwLCAwLCAwLCAwLFxuICAgICAgICAwLCAyMCwgMCwgMCwgMCwgMCwgMCwgMjQsIDAsIDAsIDAsIDAsIDAsIDIwLCAwLCAwLFxuICAgICAgICAyMCwgMCwgMCwgMCwgMCwgMCwgMCwgMjQsIDAsIDAsIDAsIDAsIDAsIDAsIDIwXG4gICAgXTtcblxuICAgIFJBWVMgPSBbXG4gICAgICAgIDE3LCAwLCAwLCAwLCAwLCAwLCAwLCAxNiwgMCwgMCwgMCwgMCwgMCwgMCwgMTUsIDAsXG4gICAgICAgIDAsIDE3LCAwLCAwLCAwLCAwLCAwLCAxNiwgMCwgMCwgMCwgMCwgMCwgMTUsIDAsIDAsXG4gICAgICAgIDAsIDAsIDE3LCAwLCAwLCAwLCAwLCAxNiwgMCwgMCwgMCwgMCwgMTUsIDAsIDAsIDAsXG4gICAgICAgIDAsIDAsIDAsIDE3LCAwLCAwLCAwLCAxNiwgMCwgMCwgMCwgMTUsIDAsIDAsIDAsIDAsXG4gICAgICAgIDAsIDAsIDAsIDAsIDE3LCAwLCAwLCAxNiwgMCwgMCwgMTUsIDAsIDAsIDAsIDAsIDAsXG4gICAgICAgIDAsIDAsIDAsIDAsIDAsIDE3LCAwLCAxNiwgMCwgMTUsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAgICAgIDAsIDAsIDAsIDAsIDAsIDAsIDE3LCAxNiwgMTUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gICAgICAgIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAwLFxuICAgICAgICAwLCAwLCAwLCAwLCAwLCAwLCAtMTUsIC0xNiwgLTE3LCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgICAgICAwLCAwLCAwLCAwLCAwLCAtMTUsIDAsIC0xNiwgMCwgLTE3LCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgICAgICAwLCAwLCAwLCAwLCAtMTUsIDAsIDAsIC0xNiwgMCwgMCwgLTE3LCAwLCAwLCAwLCAwLCAwLFxuICAgICAgICAwLCAwLCAwLCAtMTUsIDAsIDAsIDAsIC0xNiwgMCwgMCwgMCwgLTE3LCAwLCAwLCAwLCAwLFxuICAgICAgICAwLCAwLCAtMTUsIDAsIDAsIDAsIDAsIC0xNiwgMCwgMCwgMCwgMCwgLTE3LCAwLCAwLCAwLFxuICAgICAgICAwLCAtMTUsIDAsIDAsIDAsIDAsIDAsIC0xNiwgMCwgMCwgMCwgMCwgMCwgLTE3LCAwLCAwLFxuICAgICAgICAtMTUsIDAsIDAsIDAsIDAsIDAsIDAsIC0xNiwgMCwgMCwgMCwgMCwgMCwgMCwgLTE3XG4gICAgXTtcblxuICAgIFNISUZUUyA9IHsgcDogMCwgbjogMSwgYjogMiwgcjogMywgcTogNCwgazogNSB9O1xuXG4gICAgcHVibGljIEZMQUdTID0ge1xuICAgICAgICBOT1JNQUw6ICduJyxcbiAgICAgICAgQ0FQVFVSRTogJ2MnLFxuICAgICAgICBCSUdfUEFXTjogJ2InLFxuICAgICAgICBFUF9DQVBUVVJFOiAnZScsXG4gICAgICAgIFBST01PVElPTjogJ3AnLFxuICAgICAgICBLU0lERV9DQVNUTEU6ICdrJyxcbiAgICAgICAgUVNJREVfQ0FTVExFOiAncSdcbiAgICB9O1xuXG4gICAgQklUUyA9IHtcbiAgICAgICAgTk9STUFMOiAxLFxuICAgICAgICBDQVBUVVJFOiAyLFxuICAgICAgICBCSUdfUEFXTjogNCxcbiAgICAgICAgRVBfQ0FQVFVSRTogOCxcbiAgICAgICAgUFJPTU9USU9OOiAxNixcbiAgICAgICAgS1NJREVfQ0FTVExFOiAzMixcbiAgICAgICAgUVNJREVfQ0FTVExFOiA2NFxuICAgIH07XG5cbiAgICBSQU5LXzEgPSA3O1xuICAgIFJBTktfMiA9IDY7XG4gICAgUkFOS18zID0gNTtcbiAgICBSQU5LXzQgPSA0O1xuICAgIFJBTktfNSA9IDM7XG4gICAgUkFOS182ID0gMjtcbiAgICBSQU5LXzcgPSAxO1xuICAgIFJBTktfOCA9IDA7XG5cbiAgICBTUVVBUkVTID0ge1xuICAgICAgICBhODogMCwgYjg6IDEsIGM4OiAyLCBkODogMywgZTg6IDQsIGY4OiA1LCBnODogNiwgaDg6IDcsXG4gICAgICAgIGE3OiAxNiwgYjc6IDE3LCBjNzogMTgsIGQ3OiAxOSwgZTc6IDIwLCBmNzogMjEsIGc3OiAyMiwgaDc6IDIzLFxuICAgICAgICBhNjogMzIsIGI2OiAzMywgYzY6IDM0LCBkNjogMzUsIGU2OiAzNiwgZjY6IDM3LCBnNjogMzgsIGg2OiAzOSxcbiAgICAgICAgYTU6IDQ4LCBiNTogNDksIGM1OiA1MCwgZDU6IDUxLCBlNTogNTIsIGY1OiA1MywgZzU6IDU0LCBoNTogNTUsXG4gICAgICAgIGE0OiA2NCwgYjQ6IDY1LCBjNDogNjYsIGQ0OiA2NywgZTQ6IDY4LCBmNDogNjksIGc0OiA3MCwgaDQ6IDcxLFxuICAgICAgICBhMzogODAsIGIzOiA4MSwgYzM6IDgyLCBkMzogODMsIGUzOiA4NCwgZjM6IDg1LCBnMzogODYsIGgzOiA4NyxcbiAgICAgICAgYTI6IDk2LCBiMjogOTcsIGMyOiA5OCwgZDI6IDk5LCBlMjogMTAwLCBmMjogMTAxLCBnMjogMTAyLCBoMjogMTAzLFxuICAgICAgICBhMTogMTEyLCBiMTogMTEzLCBjMTogMTE0LCBkMTogMTE1LCBlMTogMTE2LCBmMTogMTE3LCBnMTogMTE4LCBoMTogMTE5XG4gICAgfTtcblxuICAgIFJPT0tTID0ge1xuICAgICAgICB3OiBbeyBzcXVhcmU6IHRoaXMuU1FVQVJFUy5hMSwgZmxhZzogdGhpcy5CSVRTLlFTSURFX0NBU1RMRSB9LFxuICAgICAgICB7IHNxdWFyZTogdGhpcy5TUVVBUkVTLmgxLCBmbGFnOiB0aGlzLkJJVFMuS1NJREVfQ0FTVExFIH1dLFxuICAgICAgICBiOiBbeyBzcXVhcmU6IHRoaXMuU1FVQVJFUy5hOCwgZmxhZzogdGhpcy5CSVRTLlFTSURFX0NBU1RMRSB9LFxuICAgICAgICB7IHNxdWFyZTogdGhpcy5TUVVBUkVTLmg4LCBmbGFnOiB0aGlzLkJJVFMuS1NJREVfQ0FTVExFIH1dXG4gICAgfTtcblxuICAgIGJvYXJkID0gbmV3IEFycmF5PENoZXNzUGllY2U+KDEyOCk7XG4gICAga2luZ3MgPSB7IHc6IHRoaXMuRU1QVFksIGI6IHRoaXMuRU1QVFkgfTtcbiAgICBwdWJsaWMgdHVybiA9IENvbG91ci5XSElURTtcbiAgICBjYXN0bGluZzogQ2FzdGxpbmcgPSB7IHc6IDAsIGI6IDAgfTtcbiAgICBlcF9zcXVhcmUgPSB0aGlzLkVNUFRZO1xuICAgIGhhbGZfbW92ZXMgPSAwO1xuICAgIG1vdmVfbnVtYmVyID0gMTtcbiAgICBoaXN0b3J5ID0gW107XG4gICAgaGVhZGVyOiBhbnkgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKGZlbj86IHN0cmluZykge1xuICAgICAgICAvKiBpZiB0aGUgdXNlciBwYXNzZXMgaW4gYSBmZW4gc3RyaW5nLCBsb2FkIGl0LCBlbHNlIGRlZmF1bHQgdG9cbiAgICAgICAgICogc3RhcnRpbmcgcG9zaXRpb25cbiAgICAgICAgICovXG4gICAgICAgIGlmICh0eXBlb2YgZmVuID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5sb2FkKHRoaXMuREVGQVVMVF9QT1NJVElPTik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvYWQoZmVuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBBcnJheSgxMjgpO1xuICAgICAgICB0aGlzLmtpbmdzID0geyB3OiB0aGlzLkVNUFRZLCBiOiB0aGlzLkVNUFRZIH07XG4gICAgICAgIHRoaXMudHVybiA9IENvbG91ci5XSElURTtcbiAgICAgICAgdGhpcy5jYXN0bGluZyA9IHsgdzogMCwgYjogMCB9O1xuICAgICAgICB0aGlzLmVwX3NxdWFyZSA9IHRoaXMuRU1QVFk7XG4gICAgICAgIHRoaXMuaGFsZl9tb3ZlcyA9IDA7XG4gICAgICAgIHRoaXMubW92ZV9udW1iZXIgPSAxO1xuICAgICAgICB0aGlzLmhpc3RvcnkgPSBbXTtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSB7fTtcbiAgICAgICAgdGhpcy51cGRhdGVfc2V0dXAodGhpcy5nZW5lcmF0ZV9mZW4oKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmxvYWQodGhpcy5ERUZBVUxUX1BPU0lUSU9OKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZChmZW4pIHtcbiAgICAgICAgY29uc3QgdG9rZW5zID0gZmVuLnNwbGl0KC9cXHMrLyk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdG9rZW5zWzBdO1xuICAgICAgICBsZXQgc3F1YXJlID0gMDtcblxuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVfZmVuKGZlbikudmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc2l0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwaWVjZSA9IHBvc2l0aW9uLmNoYXJBdChpKTtcblxuICAgICAgICAgICAgaWYgKHBpZWNlID09PSAnLycpIHtcbiAgICAgICAgICAgICAgICBzcXVhcmUgKz0gODtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc19kaWdpdChwaWVjZSkpIHtcbiAgICAgICAgICAgICAgICBzcXVhcmUgKz0gcGFyc2VJbnQocGllY2UsIDEwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSAocGllY2UgPCAnYScpID8gQ29sb3VyLldISVRFIDogQ29sb3VyLkJMQUNLO1xuICAgICAgICAgICAgICAgIHRoaXMucHV0KHsgdHlwZTogcGllY2UudG9Mb3dlckNhc2UoKSwgY29sb3I6IGNvbG9yIH0sIHRoaXMuYWxnZWJyYWljKHNxdWFyZSkpO1xuICAgICAgICAgICAgICAgIHNxdWFyZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50dXJuID0gdG9rZW5zWzFdO1xuXG4gICAgICAgIGlmICh0b2tlbnNbMl0uaW5kZXhPZignSycpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuY2FzdGxpbmcudyB8PSB0aGlzLkJJVFMuS1NJREVfQ0FTVExFO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b2tlbnNbMl0uaW5kZXhPZignUScpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuY2FzdGxpbmcudyB8PSB0aGlzLkJJVFMuUVNJREVfQ0FTVExFO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b2tlbnNbMl0uaW5kZXhPZignaycpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuY2FzdGxpbmcuYiB8PSB0aGlzLkJJVFMuS1NJREVfQ0FTVExFO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b2tlbnNbMl0uaW5kZXhPZigncScpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuY2FzdGxpbmcuYiB8PSB0aGlzLkJJVFMuUVNJREVfQ0FTVExFO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lcF9zcXVhcmUgPSAodG9rZW5zWzNdID09PSAnLScpID8gdGhpcy5FTVBUWSA6IHRoaXMuU1FVQVJFU1t0b2tlbnNbM11dO1xuICAgICAgICB0aGlzLmhhbGZfbW92ZXMgPSBwYXJzZUludCh0b2tlbnNbNF0sIDEwKTtcbiAgICAgICAgdGhpcy5tb3ZlX251bWJlciA9IHBhcnNlSW50KHRva2Vuc1s1XSwgMTApO1xuXG4gICAgICAgIHRoaXMudXBkYXRlX3NldHVwKHRoaXMuZ2VuZXJhdGVfZmVuKCkpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyogVE9ETzogdGhpcyBmdW5jdGlvbiBpcyBwcmV0dHkgbXVjaCBjcmFwIC0gaXQgdmFsaWRhdGVzIHN0cnVjdHVyZSBidXRcbiAgICAgKiBjb21wbGV0ZWx5IGlnbm9yZXMgY29udGVudCAoZS5nLiBkb2Vzbid0IHZlcmlmeSB0aGF0IGVhY2ggc2lkZSBoYXMgYSBraW5nKVxuICAgICAqIC4uLiB3ZSBzaG91bGQgcmV3cml0ZSB0aGlzLCBhbmQgZGl0Y2ggdGhlIHNpbGx5IGVycm9yX251bWJlciBmaWVsZCB3aGlsZVxuICAgICAqIHdlJ3JlIGF0IGl0XG4gICAgICovXG4gICAgcHVibGljIHZhbGlkYXRlX2ZlbihmZW4pOiBGZW5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgZXJyb3JzID0ge1xuICAgICAgICAgICAgMDogJ05vIGVycm9ycy4nLFxuICAgICAgICAgICAgMTogJ0ZFTiBzdHJpbmcgbXVzdCBjb250YWluIHNpeCBzcGFjZS1kZWxpbWl0ZWQgZmllbGRzLicsXG4gICAgICAgICAgICAyOiAnNnRoIGZpZWxkIChtb3ZlIG51bWJlcikgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIuJyxcbiAgICAgICAgICAgIDM6ICc1dGggZmllbGQgKGhhbGYgbW92ZSBjb3VudGVyKSBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIGludGVnZXIuJyxcbiAgICAgICAgICAgIDQ6ICc0dGggZmllbGQgKGVuLXBhc3NhbnQgc3F1YXJlKSBpcyBpbnZhbGlkLicsXG4gICAgICAgICAgICA1OiAnM3JkIGZpZWxkIChjYXN0bGluZyBhdmFpbGFiaWxpdHkpIGlzIGludmFsaWQuJyxcbiAgICAgICAgICAgIDY6ICcybmQgZmllbGQgKHNpZGUgdG8gbW92ZSkgaXMgaW52YWxpZC4nLFxuICAgICAgICAgICAgNzogJzFzdCBmaWVsZCAocGllY2UgcG9zaXRpb25zKSBkb2VzIG5vdCBjb250YWluIDggXFwnL1xcJy1kZWxpbWl0ZWQgcm93cy4nLFxuICAgICAgICAgICAgODogJzFzdCBmaWVsZCAocGllY2UgcG9zaXRpb25zKSBpcyBpbnZhbGlkIFtjb25zZWN1dGl2ZSBudW1iZXJzXS4nLFxuICAgICAgICAgICAgOTogJzFzdCBmaWVsZCAocGllY2UgcG9zaXRpb25zKSBpcyBpbnZhbGlkIFtpbnZhbGlkIHBpZWNlXS4nLFxuICAgICAgICAgICAgMTA6ICcxc3QgZmllbGQgKHBpZWNlIHBvc2l0aW9ucykgaXMgaW52YWxpZCBbcm93IHRvbyBsYXJnZV0uJyxcbiAgICAgICAgICAgIDExOiAnSWxsZWdhbCBlbi1wYXNzYW50IHNxdWFyZScsXG4gICAgICAgIH07XG5cbiAgICAgICAgLyogMXN0IGNyaXRlcmlvbjogNiBzcGFjZS1zZXBlcmF0ZWQgZmllbGRzPyAqL1xuICAgICAgICBjb25zdCB0b2tlbnMgPSBmZW4uc3BsaXQoL1xccysvKTtcbiAgICAgICAgaWYgKHRva2Vucy5sZW5ndGggIT09IDYpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZXJyb3JfbnVtYmVyOiAxLCBlcnJvcjogZXJyb3JzWzFdIH07XG4gICAgICAgIH1cblxuICAgICAgICAvKiAybmQgY3JpdGVyaW9uOiBtb3ZlIG51bWJlciBmaWVsZCBpcyBhIGludGVnZXIgdmFsdWUgPiAwPyAqL1xuICAgICAgICBpZiAoaXNOYU4odG9rZW5zWzVdKSB8fCAocGFyc2VJbnQodG9rZW5zWzVdLCAxMCkgPD0gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZXJyb3JfbnVtYmVyOiAyLCBlcnJvcjogZXJyb3JzWzJdIH07XG4gICAgICAgIH1cblxuICAgICAgICAvKiAzcmQgY3JpdGVyaW9uOiBoYWxmIG1vdmUgY291bnRlciBpcyBhbiBpbnRlZ2VyID49IDA/ICovXG4gICAgICAgIGlmIChpc05hTih0b2tlbnNbNF0pIHx8IChwYXJzZUludCh0b2tlbnNbNF0sIDEwKSA8IDApKSB7XG4gICAgICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIGVycm9yX251bWJlcjogMywgZXJyb3I6IGVycm9yc1szXSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogNHRoIGNyaXRlcmlvbjogNHRoIGZpZWxkIGlzIGEgdmFsaWQgZS5wLi1zdHJpbmc/ICovXG4gICAgICAgIGlmICghL14oLXxbYWJjZGVmZ2hdWzM2XSkkLy50ZXN0KHRva2Vuc1szXSkpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZXJyb3JfbnVtYmVyOiA0LCBlcnJvcjogZXJyb3JzWzRdIH07XG4gICAgICAgIH1cblxuICAgICAgICAvKiA1dGggY3JpdGVyaW9uOiAzdGggZmllbGQgaXMgYSB2YWxpZCBjYXN0bGUtc3RyaW5nPyAqL1xuICAgICAgICBpZiAoIS9eKEtRP2s/cT98UWs/cT98a3E/fHF8LSkkLy50ZXN0KHRva2Vuc1syXSkpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZXJyb3JfbnVtYmVyOiA1LCBlcnJvcjogZXJyb3JzWzVdIH07XG4gICAgICAgIH1cblxuICAgICAgICAvKiA2dGggY3JpdGVyaW9uOiAybmQgZmllbGQgaXMgXCJ3XCIgKHdoaXRlKSBvciBcImJcIiAoYmxhY2spPyAqL1xuICAgICAgICBpZiAoIS9eKHd8YikkLy50ZXN0KHRva2Vuc1sxXSkpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZXJyb3JfbnVtYmVyOiA2LCBlcnJvcjogZXJyb3JzWzZdIH07XG4gICAgICAgIH1cblxuICAgICAgICAvKiA3dGggY3JpdGVyaW9uOiAxc3QgZmllbGQgY29udGFpbnMgOCByb3dzPyAqL1xuICAgICAgICBjb25zdCByb3dzID0gdG9rZW5zWzBdLnNwbGl0KCcvJyk7XG4gICAgICAgIGlmIChyb3dzLmxlbmd0aCAhPT0gOCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBlcnJvcl9udW1iZXI6IDcsIGVycm9yOiBlcnJvcnNbN10gfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIDh0aCBjcml0ZXJpb246IGV2ZXJ5IHJvdyBpcyB2YWxpZD8gKi9cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvKiBjaGVjayBmb3IgcmlnaHQgc3VtIG9mIGZpZWxkcyBBTkQgbm90IHR3byBudW1iZXJzIGluIHN1Y2Nlc3Npb24gKi9cbiAgICAgICAgICAgIGxldCBzdW1fZmllbGRzID0gMDtcbiAgICAgICAgICAgIGxldCBwcmV2aW91c193YXNfbnVtYmVyID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgcm93c1tpXS5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4ocm93c1tpXVtrXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzX3dhc19udW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZXJyb3JfbnVtYmVyOiA4LCBlcnJvcjogZXJyb3JzWzhdIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3VtX2ZpZWxkcyArPSBwYXJzZUludChyb3dzW2ldW2tdLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzX3dhc19udW1iZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghL15bcHJuYnFrUFJOQlFLXSQvLnRlc3Qocm93c1tpXVtrXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZXJyb3JfbnVtYmVyOiA5LCBlcnJvcjogZXJyb3JzWzldIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3VtX2ZpZWxkcyArPSAxO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c193YXNfbnVtYmVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN1bV9maWVsZHMgIT09IDgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIGVycm9yX251bWJlcjogMTAsIGVycm9yOiBlcnJvcnNbMTBdIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHRva2Vuc1szXVsxXSA9PT0gJzMnICYmIHRva2Vuc1sxXSA9PT0gJ3cnKSB8fFxuICAgICAgICAgICAgKHRva2Vuc1szXVsxXSA9PT0gJzYnICYmIHRva2Vuc1sxXSA9PT0gJ2InKSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBlcnJvcl9udW1iZXI6IDExLCBlcnJvcjogZXJyb3JzWzExXSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogZXZlcnl0aGluZydzIG9rYXkhICovXG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBlcnJvcl9udW1iZXI6IDAsIGVycm9yOiBlcnJvcnNbMF0gfTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZV9mZW4oKSB7XG4gICAgICAgIGxldCBlbXB0eSA9IDA7XG4gICAgICAgIGxldCBmZW4gPSAnJztcblxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5TUVVBUkVTLmE4OyBpIDw9IHRoaXMuU1FVQVJFUy5oMTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZW1wdHkrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGVtcHR5ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmZW4gKz0gZW1wdHk7XG4gICAgICAgICAgICAgICAgICAgIGVtcHR5ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmJvYXJkW2ldLmNvbG9yO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBpZWNlID0gdGhpcy5ib2FyZFtpXS50eXBlO1xuXG4gICAgICAgICAgICAgICAgZmVuICs9IChjb2xvciA9PT0gQ29sb3VyLldISVRFKSA/XG4gICAgICAgICAgICAgICAgICAgIHBpZWNlLnRvVXBwZXJDYXNlKCkgOiBwaWVjZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoKGkgKyAxKSAmIDB4ODgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZW1wdHkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZlbiArPSBlbXB0eTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaSAhPT0gdGhpcy5TUVVBUkVTLmgxKSB7XG4gICAgICAgICAgICAgICAgICAgIGZlbiArPSAnLyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZW1wdHkgPSAwO1xuICAgICAgICAgICAgICAgIGkgKz0gODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjZmxhZ3MgPSAnJztcbiAgICAgICAgaWYgKHRoaXMuY2FzdGxpbmdbQ29sb3VyLldISVRFXSAmIHRoaXMuQklUUy5LU0lERV9DQVNUTEUpIHsgY2ZsYWdzICs9ICdLJzsgfVxuICAgICAgICBpZiAodGhpcy5jYXN0bGluZ1tDb2xvdXIuV0hJVEVdICYgdGhpcy5CSVRTLlFTSURFX0NBU1RMRSkgeyBjZmxhZ3MgKz0gJ1EnOyB9XG4gICAgICAgIGlmICh0aGlzLmNhc3RsaW5nW0NvbG91ci5CTEFDS10gJiB0aGlzLkJJVFMuS1NJREVfQ0FTVExFKSB7IGNmbGFncyArPSAnayc7IH1cbiAgICAgICAgaWYgKHRoaXMuY2FzdGxpbmdbQ29sb3VyLkJMQUNLXSAmIHRoaXMuQklUUy5RU0lERV9DQVNUTEUpIHsgY2ZsYWdzICs9ICdxJzsgfVxuXG4gICAgICAgIC8qIGRvIHdlIGhhdmUgYW4gZW1wdHkgY2FzdGxpbmcgZmxhZz8gKi9cbiAgICAgICAgY2ZsYWdzID0gY2ZsYWdzIHx8ICctJztcbiAgICAgICAgY29uc3QgZXBmbGFncyA9ICh0aGlzLmVwX3NxdWFyZSA9PT0gdGhpcy5FTVBUWSkgPyAnLScgOiB0aGlzLmFsZ2VicmFpYyh0aGlzLmVwX3NxdWFyZSk7XG5cbiAgICAgICAgcmV0dXJuIFtmZW4sIHRoaXMudHVybiwgY2ZsYWdzLCBlcGZsYWdzLCB0aGlzLmhhbGZfbW92ZXMsIHRoaXMubW92ZV9udW1iZXJdLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICBzZXRfaGVhZGVyKGFyZ3MpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3NbaV0gPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGFyZ3NbaSArIDFdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyW2FyZ3NbaV1dID0gYXJnc1tpICsgMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyO1xuICAgIH1cblxuICAgIC8qIGNhbGxlZCB3aGVuIHRoZSBpbml0aWFsIGJvYXJkIHNldHVwIGlzIGNoYW5nZWQgd2l0aCBwdXQoKSBvciByZW1vdmUoKS5cbiAgICAgKiBtb2RpZmllcyB0aGUgU2V0VXAgYW5kIEZFTiBwcm9wZXJ0aWVzIG9mIHRoZSBoZWFkZXIgb2JqZWN0LiAgaWYgdGhlIEZFTiBpc1xuICAgICAqIGVxdWFsIHRvIHRoZSBkZWZhdWx0IHBvc2l0aW9uLCB0aGUgU2V0VXAgYW5kIEZFTiBhcmUgZGVsZXRlZFxuICAgICAqIHRoZSBzZXR1cCBpcyBvbmx5IHVwZGF0ZWQgaWYgaGlzdG9yeS5sZW5ndGggaXMgemVybywgaWUgbW92ZXMgaGF2ZW4ndCBiZWVuXG4gICAgICogbWFkZS5cbiAgICAgKi9cbiAgICB1cGRhdGVfc2V0dXAoZmVuKSB7XG4gICAgICAgIGlmIChoaXN0b3J5Lmxlbmd0aCA+IDApIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgaWYgKGZlbiAhPT0gdGhpcy5ERUZBVUxUX1BPU0lUSU9OKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRlclsnU2V0VXAnXSA9ICcxJztcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyWydGRU4nXSA9IGZlbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmhlYWRlclsnU2V0VXAnXTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmhlYWRlclsnRkVOJ107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KHNxdWFyZSkge1xuICAgICAgICBjb25zdCBwaWVjZSA9IHRoaXMuYm9hcmRbdGhpcy5TUVVBUkVTW3NxdWFyZV1dO1xuICAgICAgICByZXR1cm4gKHBpZWNlKSA/IHsgdHlwZTogcGllY2UudHlwZSwgY29sb3I6IHBpZWNlLmNvbG9yIH0gOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHB1dChwaWVjZSwgc3F1YXJlKSB7XG4gICAgICAgIC8qIGNoZWNrIGZvciB2YWxpZCBwaWVjZSBvYmplY3QgKi9cbiAgICAgICAgaWYgKCEoJ3R5cGUnIGluIHBpZWNlICYmICdjb2xvcicgaW4gcGllY2UpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBjaGVjayBmb3IgcGllY2UgKi9cbiAgICAgICAgaWYgKHRoaXMuU1lNQk9MUy5pbmRleE9mKHBpZWNlLnR5cGUudG9Mb3dlckNhc2UoKSkgPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBjaGVjayBmb3IgdmFsaWQgc3F1YXJlICovXG4gICAgICAgIGlmICghKHNxdWFyZSBpbiB0aGlzLlNRVUFSRVMpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzcSA9IHRoaXMuU1FVQVJFU1tzcXVhcmVdO1xuXG4gICAgICAgIC8qIGRvbid0IGxldCB0aGUgdXNlciBwbGFjZSBtb3JlIHRoYW4gb25lIGtpbmcgKi9cbiAgICAgICAgaWYgKHBpZWNlLnR5cGUgPT09IFBpZWNlVHlwZS5LSU5HICYmXG4gICAgICAgICAgICAhKHRoaXMua2luZ3NbcGllY2UuY29sb3JdID09PSB0aGlzLkVNUFRZIHx8IHRoaXMua2luZ3NbcGllY2UuY29sb3JdID09PSBzcSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYm9hcmRbc3FdID0geyB0eXBlOiBwaWVjZS50eXBlLCBjb2xvcjogcGllY2UuY29sb3IgfTtcbiAgICAgICAgaWYgKHBpZWNlLnR5cGUgPT09IFBpZWNlVHlwZS5LSU5HKSB7XG4gICAgICAgICAgICB0aGlzLmtpbmdzW3BpZWNlLmNvbG9yXSA9IHNxO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVfc2V0dXAodGhpcy5nZW5lcmF0ZV9mZW4oKSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmUoc3F1YXJlKSB7XG4gICAgICAgIGNvbnN0IHBpZWNlID0gdGhpcy5nZXQoc3F1YXJlKTtcbiAgICAgICAgdGhpcy5ib2FyZFt0aGlzLlNRVUFSRVNbc3F1YXJlXV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChwaWVjZSAmJiBwaWVjZS50eXBlID09PSBQaWVjZVR5cGUuS0lORykge1xuICAgICAgICAgICAgdGhpcy5raW5nc1twaWVjZS5jb2xvcl0gPSB0aGlzLkVNUFRZO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVfc2V0dXAodGhpcy5nZW5lcmF0ZV9mZW4oKSk7XG4gICAgICAgIHJldHVybiBwaWVjZTtcbiAgICB9XG5cbiAgICBidWlsZF9tb3ZlKGJvYXJkLCBmcm9tLCB0bywgZmxhZ3MsIHByb21vdGlvbj8pIHtcbiAgICAgICAgY29uc3QgbW92ZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLnR1cm4sXG4gICAgICAgICAgICBmcm9tOiBmcm9tLFxuICAgICAgICAgICAgdG86IHRvLFxuICAgICAgICAgICAgZmxhZ3M6IGZsYWdzLFxuICAgICAgICAgICAgcGllY2U6IGJvYXJkW2Zyb21dLnR5cGUsXG4gICAgICAgICAgICAvLyBkZ206IHRoZXNlIG5lZWRlZCB0byBleGlzdCBmb3IgdHlwZXNjcmlwdFxuICAgICAgICAgICAgcHJvbW90aW9uOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBjYXB0dXJlZDogdW5kZWZpbmVkXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHByb21vdGlvbikge1xuICAgICAgICAgICAgbW92ZS5mbGFncyB8PSB0aGlzLkJJVFMuUFJPTU9USU9OO1xuICAgICAgICAgICAgbW92ZS5wcm9tb3Rpb24gPSBwcm9tb3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9hcmRbdG9dKSB7XG4gICAgICAgICAgICBtb3ZlLmNhcHR1cmVkID0gYm9hcmRbdG9dLnR5cGU7XG4gICAgICAgIH0gZWxzZSBpZiAoZmxhZ3MgJiB0aGlzLkJJVFMuRVBfQ0FQVFVSRSkge1xuICAgICAgICAgICAgbW92ZS5jYXB0dXJlZCA9IFBpZWNlVHlwZS5QQVdOO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb3ZlO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkX21vdmUoYm9hcmQsIG1vdmVzLCBmcm9tLCB0bywgZmxhZ3MpIHtcbiAgICAgICAgLyogaWYgcGF3biBwcm9tb3Rpb24gKi9cbiAgICAgICAgaWYgKGJvYXJkW2Zyb21dLnR5cGUgPT09IFBpZWNlVHlwZS5QQVdOICYmXG4gICAgICAgICAgICAodGhpcy5yYW5rKHRvKSA9PT0gdGhpcy5SQU5LXzggfHwgdGhpcy5yYW5rKHRvKSA9PT0gdGhpcy5SQU5LXzEpKSB7XG4gICAgICAgICAgICBjb25zdCBwaWVjZXMgPSBbUGllY2VUeXBlLlFVRUVOLCBQaWVjZVR5cGUuUk9PSywgUGllY2VUeXBlLkJJU0hPUCwgUGllY2VUeXBlLktOSUdIVF07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcGllY2VzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbW92ZXMucHVzaCh0aGlzLmJ1aWxkX21vdmUoYm9hcmQsIGZyb20sIHRvLCBmbGFncywgcGllY2VzW2ldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb3Zlcy5wdXNoKHRoaXMuYnVpbGRfbW92ZShib2FyZCwgZnJvbSwgdG8sIGZsYWdzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZW5lcmF0ZV9tb3ZlcyhvcHRpb25zPykge1xuXG5cbiAgICAgICAgY29uc3QgbW92ZXMgPSBbXTtcbiAgICAgICAgY29uc3QgdXMgPSB0aGlzLnR1cm47XG4gICAgICAgIGNvbnN0IHRoZW0gPSB0aGlzLnN3YXBfY29sb3IodXMpO1xuICAgICAgICBjb25zdCBzZWNvbmRfcmFuayA9IHsgYjogdGhpcy5SQU5LXzcsIHc6IHRoaXMuUkFOS18yIH07XG5cbiAgICAgICAgbGV0IGZpcnN0X3NxID0gdGhpcy5TUVVBUkVTLmE4O1xuICAgICAgICBsZXQgbGFzdF9zcSA9IHRoaXMuU1FVQVJFUy5oMTtcbiAgICAgICAgbGV0IHNpbmdsZV9zcXVhcmUgPSBmYWxzZTtcblxuICAgICAgICAvKiBkbyB3ZSB3YW50IGxlZ2FsIG1vdmVzPyAqL1xuICAgICAgICBjb25zdCBsZWdhbCA9ICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2xlZ2FsJyBpbiBvcHRpb25zKSA/XG4gICAgICAgICAgICBvcHRpb25zLmxlZ2FsIDogdHJ1ZTtcblxuICAgICAgICAvKiBhcmUgd2UgZ2VuZXJhdGluZyBtb3ZlcyBmb3IgYSBzaW5nbGUgc3F1YXJlPyAqL1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICd1bmRlZmluZWQnICYmICdzcXVhcmUnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNxdWFyZSBpbiB0aGlzLlNRVUFSRVMpIHtcbiAgICAgICAgICAgICAgICBmaXJzdF9zcSA9IGxhc3Rfc3EgPSB0aGlzLlNRVUFSRVNbb3B0aW9ucy5zcXVhcmVdO1xuICAgICAgICAgICAgICAgIHNpbmdsZV9zcXVhcmUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvKiBpbnZhbGlkIHNxdWFyZSAqL1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSBmaXJzdF9zcTsgaSA8PSBsYXN0X3NxOyBpKyspIHtcbiAgICAgICAgICAgIC8qIGRpZCB3ZSBydW4gb2ZmIHRoZSBlbmQgb2YgdGhlIGJvYXJkICovXG4gICAgICAgICAgICBpZiAoaSAmIDB4ODgpIHsgaSArPSA3OyBjb250aW51ZTsgfVxuXG4gICAgICAgICAgICBjb25zdCBwaWVjZSA9IHRoaXMuYm9hcmRbaV07XG4gICAgICAgICAgICBpZiAocGllY2UgPT09IHVuZGVmaW5lZCB8fCBwaWVjZS5jb2xvciAhPT0gdXMpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBpZWNlLnR5cGUgPT09IFBpZWNlVHlwZS5QQVdOKSB7XG4gICAgICAgICAgICAgICAgLyogc2luZ2xlIHNxdWFyZSwgbm9uLWNhcHR1cmluZyAqL1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZTEgPSBpICsgdGhpcy5QQVdOX09GRlNFVFNbdXNdWzBdO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3NxdWFyZTFdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRfbW92ZSh0aGlzLmJvYXJkLCBtb3ZlcywgaSwgc3F1YXJlMSwgdGhpcy5CSVRTLk5PUk1BTCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLyogZG91YmxlIHNxdWFyZSAqL1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBpICsgdGhpcy5QQVdOX09GRlNFVFNbdXNdWzFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2Vjb25kX3JhbmtbdXNdID09PSB0aGlzLnJhbmsoaSkgJiYgdGhpcy5ib2FyZFtzcXVhcmVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkX21vdmUodGhpcy5ib2FyZCwgbW92ZXMsIGksIHNxdWFyZSwgdGhpcy5CSVRTLkJJR19QQVdOKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qIHBhd24gY2FwdHVyZXMgKi9cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMjsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBpICsgdGhpcy5QQVdOX09GRlNFVFNbdXNdW2pdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3F1YXJlICYgMHg4OCkgeyBjb250aW51ZTsgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3NxdWFyZV0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtzcXVhcmVdLmNvbG9yID09PSB0aGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZF9tb3ZlKHRoaXMuYm9hcmQsIG1vdmVzLCBpLCBzcXVhcmUsIHRoaXMuQklUUy5DQVBUVVJFKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzcXVhcmUgPT09IHRoaXMuZXBfc3F1YXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZF9tb3ZlKHRoaXMuYm9hcmQsIG1vdmVzLCBpLCB0aGlzLmVwX3NxdWFyZSwgdGhpcy5CSVRTLkVQX0NBUFRVUkUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMCwgbGVuID0gdGhpcy5QSUVDRV9PRkZTRVRTW3BpZWNlLnR5cGVdLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuUElFQ0VfT0ZGU0VUU1twaWVjZS50eXBlXVtqXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGk7XG5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZSArPSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3F1YXJlICYgMHg4OCkgeyBicmVhazsgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtzcXVhcmVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZF9tb3ZlKHRoaXMuYm9hcmQsIG1vdmVzLCBpLCBzcXVhcmUsIHRoaXMuQklUUy5OT1JNQUwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtzcXVhcmVdLmNvbG9yID09PSB1cykgeyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkX21vdmUodGhpcy5ib2FyZCwgbW92ZXMsIGksIHNxdWFyZSwgdGhpcy5CSVRTLkNBUFRVUkUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBicmVhaywgaWYga25pZ2h0IG9yIGtpbmcgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwaWVjZS50eXBlID09PSAnbicgfHwgcGllY2UudHlwZSA9PT0gJ2snKSB7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBjaGVjayBmb3IgY2FzdGxpbmcgaWY6IGEpIHdlJ3JlIGdlbmVyYXRpbmcgYWxsIG1vdmVzLCBvciBiKSB3ZSdyZSBkb2luZ1xuICAgICAgICAgKiBzaW5nbGUgc3F1YXJlIG1vdmUgZ2VuZXJhdGlvbiBvbiB0aGUga2luZydzIHNxdWFyZVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCghc2luZ2xlX3NxdWFyZSkgfHwgbGFzdF9zcSA9PT0gdGhpcy5raW5nc1t1c10pIHtcbiAgICAgICAgICAgIC8qIGtpbmctc2lkZSBjYXN0bGluZyAqL1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FzdGxpbmdbdXNdICYgdGhpcy5CSVRTLktTSURFX0NBU1RMRSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhc3RsaW5nX2Zyb20gPSB0aGlzLmtpbmdzW3VzXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXN0bGluZ190byA9IGNhc3RsaW5nX2Zyb20gKyAyO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbY2FzdGxpbmdfZnJvbSArIDFdID09PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtjYXN0bGluZ190b10gPT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5hdHRhY2tlZCh0aGVtLCB0aGlzLmtpbmdzW3VzXSkgJiZcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuYXR0YWNrZWQodGhlbSwgY2FzdGxpbmdfZnJvbSArIDEpICYmXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLmF0dGFja2VkKHRoZW0sIGNhc3RsaW5nX3RvKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZF9tb3ZlKHRoaXMuYm9hcmQsIG1vdmVzLCB0aGlzLmtpbmdzW3VzXSwgY2FzdGxpbmdfdG8sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkJJVFMuS1NJREVfQ0FTVExFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIHF1ZWVuLXNpZGUgY2FzdGxpbmcgKi9cbiAgICAgICAgICAgIGlmICh0aGlzLmNhc3RsaW5nW3VzXSAmIHRoaXMuQklUUy5RU0lERV9DQVNUTEUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXN0bGluZ19mcm9tID0gdGhpcy5raW5nc1t1c107XG4gICAgICAgICAgICAgICAgY29uc3QgY2FzdGxpbmdfdG8gPSBjYXN0bGluZ19mcm9tIC0gMjtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2Nhc3RsaW5nX2Zyb20gLSAxXSA9PT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbY2FzdGxpbmdfZnJvbSAtIDJdID09PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtjYXN0bGluZ19mcm9tIC0gM10gPT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5hdHRhY2tlZCh0aGVtLCB0aGlzLmtpbmdzW3VzXSkgJiZcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuYXR0YWNrZWQodGhlbSwgY2FzdGxpbmdfZnJvbSAtIDEpICYmXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLmF0dGFja2VkKHRoZW0sIGNhc3RsaW5nX3RvKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZF9tb3ZlKHRoaXMuYm9hcmQsIG1vdmVzLCB0aGlzLmtpbmdzW3VzXSwgY2FzdGxpbmdfdG8sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkJJVFMuUVNJREVfQ0FTVExFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiByZXR1cm4gYWxsIHBzZXVkby1sZWdhbCBtb3ZlcyAodGhpcyBpbmNsdWRlcyBtb3ZlcyB0aGF0IGFsbG93IHRoZSBraW5nXG4gICAgICAgICAqIHRvIGJlIGNhcHR1cmVkKVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCFsZWdhbCkge1xuICAgICAgICAgICAgcmV0dXJuIG1vdmVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogZmlsdGVyIG91dCBpbGxlZ2FsIG1vdmVzICovXG4gICAgICAgIGNvbnN0IGxlZ2FsX21vdmVzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBtb3Zlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdGhpcy5tYWtlX21vdmUobW92ZXNbaV0pO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmtpbmdfYXR0YWNrZWQodXMpKSB7XG4gICAgICAgICAgICAgICAgbGVnYWxfbW92ZXMucHVzaChtb3Zlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVuZG9fbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxlZ2FsX21vdmVzO1xuICAgIH1cblxuICAgIC8qIGNvbnZlcnQgYSBtb3ZlIGZyb20gMHg4OCBjb29yZGluYXRlcyB0byBTdGFuZGFyZCBBbGdlYnJhaWMgTm90YXRpb25cbiAgICAgKiAoU0FOKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzbG9wcHkgVXNlIHRoZSBzbG9wcHkgU0FOIGdlbmVyYXRvciB0byB3b3JrIGFyb3VuZCBvdmVyXG4gICAgICogZGlzYW1iaWd1YXRpb24gYnVncyBpbiBGcml0eiBhbmQgQ2hlc3NiYXNlLiAgU2VlIGJlbG93OlxuICAgICAqXG4gICAgICogcjFicWtibnIvcHBwMnBwcC8ybjUvMUIxcFAzLzRQMy84L1BQUFAyUFAvUk5CUUsxTlIgYiBLUWtxIC0gMiA0XG4gICAgICogNC4gLi4uIE5nZTcgaXMgb3Zlcmx5IGRpc2FtYmlndWF0ZWQgYmVjYXVzZSB0aGUga25pZ2h0IG9uIGM2IGlzIHBpbm5lZFxuICAgICAqIDQuIC4uLiBOZTcgaXMgdGVjaG5pY2FsbHkgdGhlIHZhbGlkIFNBTlxuICAgICAqL1xuICAgIG1vdmVfdG9fc2FuKG1vdmUsIHNsb3BweT8pIHtcblxuICAgICAgICBsZXQgb3V0cHV0ID0gJyc7XG5cbiAgICAgICAgaWYgKG1vdmUuZmxhZ3MgJiB0aGlzLkJJVFMuS1NJREVfQ0FTVExFKSB7XG4gICAgICAgICAgICBvdXRwdXQgPSAnTy1PJztcbiAgICAgICAgfSBlbHNlIGlmIChtb3ZlLmZsYWdzICYgdGhpcy5CSVRTLlFTSURFX0NBU1RMRSkge1xuICAgICAgICAgICAgb3V0cHV0ID0gJ08tTy1PJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRpc2FtYmlndWF0b3IgPSB0aGlzLmdldF9kaXNhbWJpZ3VhdG9yKG1vdmUsIHNsb3BweSk7XG5cbiAgICAgICAgICAgIGlmIChtb3ZlLnBpZWNlICE9PSBQaWVjZVR5cGUuUEFXTikge1xuICAgICAgICAgICAgICAgIG91dHB1dCArPSBtb3ZlLnBpZWNlLnRvVXBwZXJDYXNlKCkgKyBkaXNhbWJpZ3VhdG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobW92ZS5mbGFncyAmICh0aGlzLkJJVFMuQ0FQVFVSRSB8IHRoaXMuQklUUy5FUF9DQVBUVVJFKSkge1xuICAgICAgICAgICAgICAgIGlmIChtb3ZlLnBpZWNlID09PSBQaWVjZVR5cGUuUEFXTikge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gdGhpcy5hbGdlYnJhaWMobW92ZS5mcm9tKVswXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9ICd4JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3V0cHV0ICs9IHRoaXMuYWxnZWJyYWljKG1vdmUudG8pO1xuXG4gICAgICAgICAgICBpZiAobW92ZS5mbGFncyAmIHRoaXMuQklUUy5QUk9NT1RJT04pIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gJz0nICsgbW92ZS5wcm9tb3Rpb24udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFrZV9tb3ZlKG1vdmUpO1xuICAgICAgICBpZiAodGhpcy5pbl9jaGVjaygpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbl9jaGVja21hdGUoKSkge1xuICAgICAgICAgICAgICAgIG91dHB1dCArPSAnIyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dHB1dCArPSAnKyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51bmRvX21vdmUoKTtcblxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cblxuICAgIC8vIHBhcnNlcyBhbGwgb2YgdGhlIGRlY29yYXRvcnMgb3V0IG9mIGEgU0FOIHN0cmluZ1xuICAgIHN0cmlwcGVkX3Nhbihtb3ZlKSB7XG4gICAgICAgIHJldHVybiBtb3ZlLnJlcGxhY2UoLz0vLCAnJykucmVwbGFjZSgvWysjXT9bPyFdKiQvLCAnJyk7XG4gICAgfVxuXG4gICAgYXR0YWNrZWQoY29sb3IsIHNxdWFyZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5TUVVBUkVTLmE4OyBpIDw9IHRoaXMuU1FVQVJFUy5oMTsgaSsrKSB7XG4gICAgICAgICAgICAvKiBkaWQgd2UgcnVuIG9mZiB0aGUgZW5kIG9mIHRoZSBib2FyZCAqL1xuICAgICAgICAgICAgaWYgKGkgJiAweDg4KSB7IGkgKz0gNzsgY29udGludWU7IH1cblxuICAgICAgICAgICAgLyogaWYgZW1wdHkgc3F1YXJlIG9yIHdyb25nIGNvbG9yICovXG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpXSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuYm9hcmRbaV0uY29sb3IgIT09IGNvbG9yKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAgICAgICAgIGNvbnN0IHBpZWNlID0gdGhpcy5ib2FyZFtpXTtcbiAgICAgICAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBpIC0gc3F1YXJlO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBkaWZmZXJlbmNlICsgMTE5O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5BVFRBQ0tTW2luZGV4XSAmICgxIDw8IHRoaXMuU0hJRlRTW3BpZWNlLnR5cGVdKSkge1xuICAgICAgICAgICAgICAgIGlmIChwaWVjZS50eXBlID09PSBQaWVjZVR5cGUuUEFXTikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlmZmVyZW5jZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwaWVjZS5jb2xvciA9PT0gQ29sb3VyLldISVRFKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGllY2UuY29sb3IgPT09IENvbG91ci5CTEFDSykgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qIGlmIHRoZSBwaWVjZSBpcyBhIGtuaWdodCBvciBhIGtpbmcgKi9cbiAgICAgICAgICAgICAgICBpZiAocGllY2UudHlwZSA9PT0gJ24nIHx8IHBpZWNlLnR5cGUgPT09ICdrJykgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5SQVlTW2luZGV4XTtcbiAgICAgICAgICAgICAgICBsZXQgaiA9IGkgKyBvZmZzZXQ7XG5cbiAgICAgICAgICAgICAgICBsZXQgYmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHdoaWxlIChqICE9PSBzcXVhcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbal0gIT09IHVuZGVmaW5lZCkgeyBibG9ja2VkID0gdHJ1ZTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaiArPSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFibG9ja2VkKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAga2luZ19hdHRhY2tlZChjb2xvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRhY2tlZCh0aGlzLnN3YXBfY29sb3IoY29sb3IpLCB0aGlzLmtpbmdzW2NvbG9yXSk7XG4gICAgfVxuXG4gICAgcHVibGljIGluX2NoZWNrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5raW5nX2F0dGFja2VkKHRoaXMudHVybik7XG4gICAgfVxuXG4gICAgcHVibGljIGluX2NoZWNrbWF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5fY2hlY2soKSAmJiB0aGlzLmdlbmVyYXRlX21vdmVzKCkubGVuZ3RoID09PSAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbl9zdGFsZW1hdGUoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pbl9jaGVjaygpICYmIHRoaXMuZ2VuZXJhdGVfbW92ZXMoKS5sZW5ndGggPT09IDA7XG4gICAgfVxuXG4gICAgcHVibGljIGluc3VmZmljaWVudF9tYXRlcmlhbCgpIHtcbiAgICAgICAgY29uc3QgcGllY2VzID0ge307XG4gICAgICAgIGNvbnN0IGJpc2hvcHMgPSBbXTtcbiAgICAgICAgbGV0IG51bV9waWVjZXMgPSAwO1xuICAgICAgICBsZXQgc3FfY29sb3IgPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLlNRVUFSRVMuYTg7IGkgPD0gdGhpcy5TUVVBUkVTLmgxOyBpKyspIHtcbiAgICAgICAgICAgIHNxX2NvbG9yID0gKHNxX2NvbG9yICsgMSkgJSAyO1xuICAgICAgICAgICAgaWYgKGkgJiAweDg4KSB7IGkgKz0gNzsgY29udGludWU7IH1cblxuICAgICAgICAgICAgY29uc3QgcGllY2UgPSB0aGlzLmJvYXJkW2ldO1xuICAgICAgICAgICAgaWYgKHBpZWNlKSB7XG4gICAgICAgICAgICAgICAgcGllY2VzW3BpZWNlLnR5cGVdID0gKHBpZWNlLnR5cGUgaW4gcGllY2VzKSA/XG4gICAgICAgICAgICAgICAgICAgIHBpZWNlc1twaWVjZS50eXBlXSArIDEgOiAxO1xuICAgICAgICAgICAgICAgIGlmIChwaWVjZS50eXBlID09PSBQaWVjZVR5cGUuQklTSE9QKSB7XG4gICAgICAgICAgICAgICAgICAgIGJpc2hvcHMucHVzaChzcV9jb2xvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG51bV9waWVjZXMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGsgdnMuIGsgKi9cbiAgICAgICAgaWYgKG51bV9waWVjZXMgPT09IDIpIHsgcmV0dXJuIHRydWU7IH0gZWxzZSBpZiAobnVtX3BpZWNlcyA9PT0gMyAmJiAocGllY2VzW1BpZWNlVHlwZS5CSVNIT1BdID09PSAxIHx8XG4gICAgICAgICAgICBwaWVjZXNbUGllY2VUeXBlLktOSUdIVF0gPT09IDEpKSB7IHJldHVybiB0cnVlOyB9IGVsc2UgaWYgKG51bV9waWVjZXMgPT09IHBpZWNlc1tQaWVjZVR5cGUuQklTSE9QXSArIDIpIHtcbiAgICAgICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICAgICAgY29uc3QgbGVuID0gYmlzaG9wcy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJpc2hvcHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3VtID09PSAwIHx8IHN1bSA9PT0gbGVuKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGluX3RocmVlZm9sZF9yZXBldGl0aW9uKCkge1xuICAgICAgICAvKiBUT0RPOiB3aGlsZSB0aGlzIGZ1bmN0aW9uIGlzIGZpbmUgZm9yIGNhc3VhbCB1c2UsIGEgYmV0dGVyXG4gICAgICAgICAqIGltcGxlbWVudGF0aW9uIHdvdWxkIHVzZSBhIFpvYnJpc3Qga2V5IChpbnN0ZWFkIG9mIEZFTikuIHRoZVxuICAgICAgICAgKiBab2JyaXN0IGtleSB3b3VsZCBiZSBtYWludGFpbmVkIGluIHRoZSBtYWtlX21vdmUvdW5kb19tb3ZlIGZ1bmN0aW9ucyxcbiAgICAgICAgICogYXZvaWRpbmcgdGhlIGNvc3RseSB0aGF0IHdlIGRvIGJlbG93LlxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgbW92ZXMgPSBbXTtcbiAgICAgICAgY29uc3QgcG9zaXRpb25zID0ge307XG4gICAgICAgIGxldCByZXBldGl0aW9uID0gZmFsc2U7XG5cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vdmUgPSB0aGlzLnVuZG9fbW92ZSgpO1xuICAgICAgICAgICAgaWYgKCFtb3ZlKSB7IGJyZWFrOyB9XG4gICAgICAgICAgICBtb3Zlcy5wdXNoKG1vdmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIC8qIHJlbW92ZSB0aGUgbGFzdCB0d28gZmllbGRzIGluIHRoZSBGRU4gc3RyaW5nLCB0aGV5J3JlIG5vdCBuZWVkZWRcbiAgICAgICAgICAgICAqIHdoZW4gY2hlY2tpbmcgZm9yIGRyYXcgYnkgcmVwICovXG4gICAgICAgICAgICBjb25zdCBmZW4gPSB0aGlzLmdlbmVyYXRlX2ZlbigpLnNwbGl0KCcgJykuc2xpY2UoMCwgNCkuam9pbignICcpO1xuXG4gICAgICAgICAgICAvKiBoYXMgdGhlIHBvc2l0aW9uIG9jY3VycmVkIHRocmVlIG9yIG1vdmUgdGltZXMgKi9cbiAgICAgICAgICAgIHBvc2l0aW9uc1tmZW5dID0gKGZlbiBpbiBwb3NpdGlvbnMpID8gcG9zaXRpb25zW2Zlbl0gKyAxIDogMTtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbnNbZmVuXSA+PSAzKSB7XG4gICAgICAgICAgICAgICAgcmVwZXRpdGlvbiA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghbW92ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1ha2VfbW92ZShtb3Zlcy5wb3AoKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVwZXRpdGlvbjtcbiAgICB9XG5cbiAgICBwdXNoKG1vdmUpIHtcbiAgICAgICAgdGhpcy5oaXN0b3J5LnB1c2goe1xuICAgICAgICAgICAgbW92ZTogbW92ZSxcbiAgICAgICAgICAgIGtpbmdzOiB7IGI6IHRoaXMua2luZ3MuYiwgdzogdGhpcy5raW5ncy53IH0sXG4gICAgICAgICAgICB0dXJuOiB0aGlzLnR1cm4sXG4gICAgICAgICAgICBjYXN0bGluZzogeyBiOiB0aGlzLmNhc3RsaW5nLmIsIHc6IHRoaXMuY2FzdGxpbmcudyB9LFxuICAgICAgICAgICAgZXBfc3F1YXJlOiB0aGlzLmVwX3NxdWFyZSxcbiAgICAgICAgICAgIGhhbGZfbW92ZXM6IHRoaXMuaGFsZl9tb3ZlcyxcbiAgICAgICAgICAgIG1vdmVfbnVtYmVyOiB0aGlzLm1vdmVfbnVtYmVyXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1ha2VfbW92ZShtb3ZlKSB7XG4gICAgICAgIGNvbnN0IHVzOiBDb2xvdXIgPSB0aGlzLnR1cm47XG4gICAgICAgIGNvbnN0IHRoZW0gPSB0aGlzLnN3YXBfY29sb3IodXMpO1xuICAgICAgICB0aGlzLnB1c2gobW92ZSk7XG5cbiAgICAgICAgdGhpcy5ib2FyZFttb3ZlLnRvXSA9IHRoaXMuYm9hcmRbbW92ZS5mcm9tXTtcbiAgICAgICAgdGhpcy5ib2FyZFttb3ZlLmZyb21dID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIC8qIGlmIGVwIGNhcHR1cmUsIHJlbW92ZSB0aGUgY2FwdHVyZWQgcGF3biAqL1xuICAgICAgICBpZiAobW92ZS5mbGFncyAmIHRoaXMuQklUUy5FUF9DQVBUVVJFKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50dXJuID09PSBDb2xvdXIuQkxBQ0spIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW21vdmUudG8gLSAxNl0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbbW92ZS50byArIDE2XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGlmIHBhd24gcHJvbW90aW9uLCByZXBsYWNlIHdpdGggbmV3IHBpZWNlICovXG4gICAgICAgIGlmIChtb3ZlLmZsYWdzICYgdGhpcy5CSVRTLlBST01PVElPTikge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFttb3ZlLnRvXSA9IHsgdHlwZTogbW92ZS5wcm9tb3Rpb24sIGNvbG9yOiB1cyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogaWYgd2UgbW92ZWQgdGhlIGtpbmcgKi9cbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbbW92ZS50b10udHlwZSA9PT0gUGllY2VUeXBlLktJTkcpIHtcbiAgICAgICAgICAgIHRoaXMua2luZ3NbdGhpcy5ib2FyZFttb3ZlLnRvXS5jb2xvcl0gPSBtb3ZlLnRvO1xuXG4gICAgICAgICAgICAvKiBpZiB3ZSBjYXN0bGVkLCBtb3ZlIHRoZSByb29rIG5leHQgdG8gdGhlIGtpbmcgKi9cbiAgICAgICAgICAgIGlmIChtb3ZlLmZsYWdzICYgdGhpcy5CSVRTLktTSURFX0NBU1RMRSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhc3RsaW5nX3RvID0gbW92ZS50byAtIDE7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FzdGxpbmdfZnJvbSA9IG1vdmUudG8gKyAxO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbY2FzdGxpbmdfdG9dID0gdGhpcy5ib2FyZFtjYXN0bGluZ19mcm9tXTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2Nhc3RsaW5nX2Zyb21dID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtb3ZlLmZsYWdzICYgdGhpcy5CSVRTLlFTSURFX0NBU1RMRSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhc3RsaW5nX3RvMiA9IG1vdmUudG8gKyAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhc3RsaW5nX2Zyb20yID0gbW92ZS50byAtIDI7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtjYXN0bGluZ190bzJdID0gdGhpcy5ib2FyZFtjYXN0bGluZ19mcm9tMl07XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtjYXN0bGluZ19mcm9tMl0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIHR1cm4gb2ZmIGNhc3RsaW5nICovXG4gICAgICAgICAgICB0aGlzLmNhc3RsaW5nW3VzXSA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogdHVybiBvZmYgY2FzdGxpbmcgaWYgd2UgbW92ZSBhIHJvb2sgKi9cbiAgICAgICAgaWYgKHRoaXMuY2FzdGxpbmdbdXNdKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5ST09LU1t1c10ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobW92ZS5mcm9tID09PSB0aGlzLlJPT0tTW3VzXVtpXS5zcXVhcmUgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXN0bGluZ1t1c10gJiB0aGlzLlJPT0tTW3VzXVtpXS5mbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FzdGxpbmdbdXNdIF49IHRoaXMuUk9PS1NbdXNdW2ldLmZsYWc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qIHR1cm4gb2ZmIGNhc3RsaW5nIGlmIHdlIGNhcHR1cmUgYSByb29rICovXG4gICAgICAgIGlmICh0aGlzLmNhc3RsaW5nW3RoZW1dKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5ST09LU1t0aGVtXS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChtb3ZlLnRvID09PSB0aGlzLlJPT0tTW3RoZW1dW2ldLnNxdWFyZSAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhc3RsaW5nW3RoZW1dICYgdGhpcy5ST09LU1t0aGVtXVtpXS5mbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FzdGxpbmdbdGhlbV0gXj0gdGhpcy5ST09LU1t0aGVtXVtpXS5mbGFnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBpZiBiaWcgcGF3biBtb3ZlLCB1cGRhdGUgdGhlIGVuIHBhc3NhbnQgc3F1YXJlICovXG4gICAgICAgIGlmIChtb3ZlLmZsYWdzICYgdGhpcy5CSVRTLkJJR19QQVdOKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50dXJuID09PSAnYicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVwX3NxdWFyZSA9IG1vdmUudG8gLSAxNjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcF9zcXVhcmUgPSBtb3ZlLnRvICsgMTY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVwX3NxdWFyZSA9IHRoaXMuRU1QVFk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiByZXNldCB0aGUgNTAgbW92ZSBjb3VudGVyIGlmIGEgcGF3biBpcyBtb3ZlZCBvciBhIHBpZWNlIGlzIGNhcHR1cmVkICovXG4gICAgICAgIGlmIChtb3ZlLnBpZWNlID09PSBQaWVjZVR5cGUuUEFXTikge1xuICAgICAgICAgICAgdGhpcy5oYWxmX21vdmVzID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChtb3ZlLmZsYWdzICYgKHRoaXMuQklUUy5DQVBUVVJFIHwgdGhpcy5CSVRTLkVQX0NBUFRVUkUpKSB7XG4gICAgICAgICAgICB0aGlzLmhhbGZfbW92ZXMgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oYWxmX21vdmVzKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50dXJuID09PSBDb2xvdXIuQkxBQ0spIHtcbiAgICAgICAgICAgIHRoaXMubW92ZV9udW1iZXIrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnR1cm4gPSB0aGlzLnN3YXBfY29sb3IodGhpcy50dXJuKTtcbiAgICB9XG5cbiAgICB1bmRvX21vdmUoKSB7XG4gICAgICAgIGNvbnN0IG9sZCA9IHRoaXMuaGlzdG9yeS5wb3AoKTtcbiAgICAgICAgaWYgKG9sZCA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH1cblxuICAgICAgICBjb25zdCBtb3ZlID0gb2xkLm1vdmU7XG4gICAgICAgIHRoaXMua2luZ3MgPSBvbGQua2luZ3M7XG4gICAgICAgIHRoaXMudHVybiA9IG9sZC50dXJuO1xuICAgICAgICB0aGlzLmNhc3RsaW5nID0gb2xkLmNhc3RsaW5nO1xuICAgICAgICB0aGlzLmVwX3NxdWFyZSA9IG9sZC5lcF9zcXVhcmU7XG4gICAgICAgIHRoaXMuaGFsZl9tb3ZlcyA9IG9sZC5oYWxmX21vdmVzO1xuICAgICAgICB0aGlzLm1vdmVfbnVtYmVyID0gb2xkLm1vdmVfbnVtYmVyO1xuXG4gICAgICAgIGNvbnN0IHVzID0gdGhpcy50dXJuO1xuICAgICAgICBjb25zdCB0aGVtID0gdGhpcy5zd2FwX2NvbG9yKHRoaXMudHVybik7XG5cbiAgICAgICAgdGhpcy5ib2FyZFttb3ZlLmZyb21dID0gdGhpcy5ib2FyZFttb3ZlLnRvXTtcbiAgICAgICAgdGhpcy5ib2FyZFttb3ZlLmZyb21dLnR5cGUgPSBtb3ZlLnBpZWNlOyAgLy8gdG8gdW5kbyBhbnkgcHJvbW90aW9uc1xuICAgICAgICB0aGlzLmJvYXJkW21vdmUudG9dID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmIChtb3ZlLmZsYWdzICYgdGhpcy5CSVRTLkNBUFRVUkUpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbbW92ZS50b10gPSB7IHR5cGU6IG1vdmUuY2FwdHVyZWQsIGNvbG9yOiB0aGVtIH07XG4gICAgICAgIH0gZWxzZSBpZiAobW92ZS5mbGFncyAmIHRoaXMuQklUUy5FUF9DQVBUVVJFKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXg7XG4gICAgICAgICAgICBpZiAodXMgPT09IENvbG91ci5CTEFDSykge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gbW92ZS50byAtIDE2O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IG1vdmUudG8gKyAxNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYm9hcmRbaW5kZXhdID0geyB0eXBlOiBQaWVjZVR5cGUuUEFXTiwgY29sb3I6IHRoZW0gfTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKG1vdmUuZmxhZ3MgJiAodGhpcy5CSVRTLktTSURFX0NBU1RMRSB8IHRoaXMuQklUUy5RU0lERV9DQVNUTEUpKSB7XG4gICAgICAgICAgICBsZXQgY2FzdGxpbmdfdG8sIGNhc3RsaW5nX2Zyb207XG4gICAgICAgICAgICBpZiAobW92ZS5mbGFncyAmIHRoaXMuQklUUy5LU0lERV9DQVNUTEUpIHtcbiAgICAgICAgICAgICAgICBjYXN0bGluZ190byA9IG1vdmUudG8gKyAxO1xuICAgICAgICAgICAgICAgIGNhc3RsaW5nX2Zyb20gPSBtb3ZlLnRvIC0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobW92ZS5mbGFncyAmIHRoaXMuQklUUy5RU0lERV9DQVNUTEUpIHtcbiAgICAgICAgICAgICAgICBjYXN0bGluZ190byA9IG1vdmUudG8gLSAyO1xuICAgICAgICAgICAgICAgIGNhc3RsaW5nX2Zyb20gPSBtb3ZlLnRvICsgMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5ib2FyZFtjYXN0bGluZ190b10gPSB0aGlzLmJvYXJkW2Nhc3RsaW5nX2Zyb21dO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtjYXN0bGluZ19mcm9tXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW92ZTtcbiAgICB9XG5cbiAgICAvKiB0aGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gdW5pcXVlbHkgaWRlbnRpZnkgYW1iaWd1b3VzIG1vdmVzICovXG4gICAgZ2V0X2Rpc2FtYmlndWF0b3IobW92ZSwgc2xvcHB5KSB7XG4gICAgICAgIGNvbnN0IG1vdmVzID0gdGhpcy5nZW5lcmF0ZV9tb3Zlcyh7IGxlZ2FsOiAhc2xvcHB5IH0pO1xuXG4gICAgICAgIGNvbnN0IGZyb20gPSBtb3ZlLmZyb207XG4gICAgICAgIGNvbnN0IHRvID0gbW92ZS50bztcbiAgICAgICAgY29uc3QgcGllY2UgPSBtb3ZlLnBpZWNlO1xuXG4gICAgICAgIGxldCBhbWJpZ3VpdGllcyA9IDA7XG4gICAgICAgIGxldCBzYW1lX3JhbmsgPSAwO1xuICAgICAgICBsZXQgc2FtZV9maWxlID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbW92ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGFtYmlnX2Zyb20gPSBtb3Zlc1tpXS5mcm9tO1xuICAgICAgICAgICAgY29uc3QgYW1iaWdfdG8gPSBtb3Zlc1tpXS50bztcbiAgICAgICAgICAgIGNvbnN0IGFtYmlnX3BpZWNlID0gbW92ZXNbaV0ucGllY2U7XG5cbiAgICAgICAgICAgIC8qIGlmIGEgbW92ZSBvZiB0aGUgc2FtZSBwaWVjZSB0eXBlIGVuZHMgb24gdGhlIHNhbWUgdG8gc3F1YXJlLCB3ZSdsbFxuICAgICAgICAgICAgICogbmVlZCB0byBhZGQgYSBkaXNhbWJpZ3VhdG9yIHRvIHRoZSBhbGdlYnJhaWMgbm90YXRpb25cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKHBpZWNlID09PSBhbWJpZ19waWVjZSAmJiBmcm9tICE9PSBhbWJpZ19mcm9tICYmIHRvID09PSBhbWJpZ190bykge1xuICAgICAgICAgICAgICAgIGFtYmlndWl0aWVzKys7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yYW5rKGZyb20pID09PSB0aGlzLnJhbmsoYW1iaWdfZnJvbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2FtZV9yYW5rKys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZShmcm9tKSA9PT0gdGhpcy5maWxlKGFtYmlnX2Zyb20pKSB7XG4gICAgICAgICAgICAgICAgICAgIHNhbWVfZmlsZSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbWJpZ3VpdGllcyA+IDApIHtcbiAgICAgICAgICAgIC8qIGlmIHRoZXJlIGV4aXN0cyBhIHNpbWlsYXIgbW92aW5nIHBpZWNlIG9uIHRoZSBzYW1lIHJhbmsgYW5kIGZpbGUgYXNcbiAgICAgICAgICAgICAqIHRoZSBtb3ZlIGluIHF1ZXN0aW9uLCB1c2UgdGhlIHNxdWFyZSBhcyB0aGUgZGlzYW1iaWd1YXRvclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAoc2FtZV9yYW5rID4gMCAmJiBzYW1lX2ZpbGUgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWxnZWJyYWljKGZyb20pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzYW1lX2ZpbGUgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWxnZWJyYWljKGZyb20pLmNoYXJBdCgxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWxnZWJyYWljKGZyb20pLmNoYXJBdCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBwdWJsaWMgYXNjaWkoKSB7XG4gICAgICAgIGxldCBzID0gJyAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXFxuJztcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuU1FVQVJFUy5hODsgaSA8PSB0aGlzLlNRVUFSRVMuaDE7IGkrKykge1xuICAgICAgICAgICAgLyogZGlzcGxheSB0aGUgcmFuayAqL1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZShpKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHMgKz0gJyAnICsgJzg3NjU0MzIxJ1t0aGlzLnJhbmsoaSldICsgJyB8JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogZW1wdHkgcGllY2UgKi9cbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzICs9ICcgLiAnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwaWVjZSA9IHRoaXMuYm9hcmRbaV0udHlwZTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuYm9hcmRbaV0uY29sb3I7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gKGNvbG9yID09PSBDb2xvdXIuV0hJVEUpID9cbiAgICAgICAgICAgICAgICAgICAgcGllY2UudG9VcHBlckNhc2UoKSA6IHBpZWNlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgcyArPSAnICcgKyBzeW1ib2wgKyAnICc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgoaSArIDEpICYgMHg4OCkge1xuICAgICAgICAgICAgICAgIHMgKz0gJ3xcXG4nO1xuICAgICAgICAgICAgICAgIGkgKz0gODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzICs9ICcgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xcbic7XG4gICAgICAgIHMgKz0gJyAgICAgYSAgYiAgYyAgZCAgZSAgZiAgZyAgaFxcbic7XG5cbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxuXG4gICAgLy8gY29udmVydCBhIG1vdmUgZnJvbSBTdGFuZGFyZCBBbGdlYnJhaWMgTm90YXRpb24gKFNBTikgdG8gMHg4OCBjb29yZGluYXRlc1xuICAgIG1vdmVfZnJvbV9zYW4obW92ZSwgc2xvcHB5KSB7XG4gICAgICAgIC8vIHN0cmlwIG9mZiBhbnkgbW92ZSBkZWNvcmF0aW9uczogZS5nIE5mMys/IVxuICAgICAgICBjb25zdCBjbGVhbl9tb3ZlID0gdGhpcy5zdHJpcHBlZF9zYW4obW92ZSk7XG5cbiAgICAgICAgLy8gaWYgd2UncmUgdXNpbmcgdGhlIHNsb3BweSBwYXJzZXIgcnVuIGEgcmVnZXggdG8gZ3JhYiBwaWVjZSwgdG8sIGFuZCBmcm9tXG4gICAgICAgIC8vIHRoaXMgc2hvdWxkIHBhcnNlIGludmFsaWQgU0FOIGxpa2U6IFBlMi1lNCwgUmMxYzQsIFFmM3hmN1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gY2xlYW5fbW92ZS5tYXRjaCgvKFtwbmJycWtQTkJSUUtdKT8oW2EtaF1bMS04XSl4Py0/KFthLWhdWzEtOF0pKFtxcmJuUVJCTl0pPy8pO1xuICAgICAgICBsZXQgcGllY2U7XG4gICAgICAgIGxldCBmcm9tO1xuICAgICAgICBsZXQgdG87XG4gICAgICAgIGxldCBwcm9tb3Rpb247XG4gICAgICAgIGlmIChzbG9wcHkpIHtcbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgcGllY2UgPSBtYXRjaGVzWzFdO1xuICAgICAgICAgICAgICAgIGZyb20gPSBtYXRjaGVzWzJdO1xuICAgICAgICAgICAgICAgIHRvID0gbWF0Y2hlc1szXTtcbiAgICAgICAgICAgICAgICBwcm9tb3Rpb24gPSBtYXRjaGVzWzRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbW92ZXMgPSB0aGlzLmdlbmVyYXRlX21vdmVzKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBtb3Zlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgLy8gdHJ5IHRoZSBzdHJpY3QgcGFyc2VyIGZpcnN0LCB0aGVuIHRoZSBzbG9wcHkgcGFyc2VyIGlmIHJlcXVlc3RlZFxuICAgICAgICAgICAgLy8gYnkgdGhlIHVzZXJcbiAgICAgICAgICAgIGlmICgoY2xlYW5fbW92ZSA9PT0gdGhpcy5zdHJpcHBlZF9zYW4odGhpcy5tb3ZlX3RvX3Nhbihtb3Zlc1tpXSkpKSB8fFxuICAgICAgICAgICAgICAgIChzbG9wcHkgJiYgY2xlYW5fbW92ZSA9PT0gdGhpcy5zdHJpcHBlZF9zYW4odGhpcy5tb3ZlX3RvX3Nhbihtb3Zlc1tpXSwgdHJ1ZSkpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb3Zlc1tpXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgKCFwaWVjZSB8fCBwaWVjZS50b0xvd2VyQ2FzZSgpID09PSBtb3Zlc1tpXS5waWVjZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TUVVBUkVTW2Zyb21dID09PSBtb3Zlc1tpXS5mcm9tICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU1FVQVJFU1t0b10gPT09IG1vdmVzW2ldLnRvICYmXG4gICAgICAgICAgICAgICAgICAgICghcHJvbW90aW9uIHx8IHByb21vdGlvbi50b0xvd2VyQ2FzZSgpID09PSBtb3Zlc1tpXS5wcm9tb3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3Zlc1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogVVRJTElUWSBGVU5DVElPTlNcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICByYW5rKGkpIHtcbiAgICAgICAgcmV0dXJuIGkgPj4gNDtcbiAgICB9XG5cbiAgICBmaWxlKGkpIHtcbiAgICAgICAgcmV0dXJuIGkgJiAxNTtcbiAgICB9XG5cbiAgICBhbGdlYnJhaWMoaSkge1xuICAgICAgICBjb25zdCBmID0gdGhpcy5maWxlKGkpLCByID0gdGhpcy5yYW5rKGkpO1xuICAgICAgICByZXR1cm4gJ2FiY2RlZmdoJy5zdWJzdHJpbmcoZiwgZiArIDEpICsgJzg3NjU0MzIxJy5zdWJzdHJpbmcociwgciArIDEpO1xuICAgIH1cblxuICAgIHN3YXBfY29sb3IoYykge1xuICAgICAgICByZXR1cm4gYyA9PT0gQ29sb3VyLldISVRFID8gQ29sb3VyLkJMQUNLIDogQ29sb3VyLldISVRFO1xuICAgIH1cblxuICAgIGlzX2RpZ2l0KGMpIHtcbiAgICAgICAgcmV0dXJuICcwMTIzNDU2Nzg5Jy5pbmRleE9mKGMpICE9PSAtMTtcbiAgICB9XG5cbiAgICAvKiBwcmV0dHkgPSBleHRlcm5hbCBtb3ZlIG9iamVjdCAqL1xuICAgIG1ha2VfcHJldHR5KHVnbHlfbW92ZSkge1xuICAgICAgICBjb25zdCBtb3ZlID0gdGhpcy5jbG9uZSh1Z2x5X21vdmUpO1xuICAgICAgICBtb3ZlLnNhbiA9IHRoaXMubW92ZV90b19zYW4obW92ZSwgZmFsc2UpO1xuICAgICAgICBtb3ZlLnRvID0gdGhpcy5hbGdlYnJhaWMobW92ZS50byk7XG4gICAgICAgIG1vdmUuZnJvbSA9IHRoaXMuYWxnZWJyYWljKG1vdmUuZnJvbSk7XG5cbiAgICAgICAgbGV0IGZsYWdzID0gJyc7XG5cbiAgICAgICAgZm9yIChjb25zdCBmbGFnIGluIHRoaXMuQklUUykge1xuICAgICAgICAgICAgaWYgKHRoaXMuQklUU1tmbGFnXSAmIG1vdmUuZmxhZ3MpIHtcbiAgICAgICAgICAgICAgICBmbGFncyArPSB0aGlzLkZMQUdTW2ZsYWddO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1vdmUuZmxhZ3MgPSBmbGFncztcblxuICAgICAgICByZXR1cm4gbW92ZTtcbiAgICB9XG5cbiAgICBjbG9uZShvYmopIHtcbiAgICAgICAgY29uc3QgZHVwZTogYW55ID0gKG9iaiBpbnN0YW5jZW9mIEFycmF5KSA/IFtdIDoge307XG5cbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcGVydHkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgZHVwZVtwcm9wZXJ0eV0gPSB0aGlzLmNsb25lKG9ialtwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkdXBlW3Byb3BlcnR5XSA9IG9ialtwcm9wZXJ0eV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZHVwZTtcbiAgICB9XG5cbiAgICB0cmltKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBERUJVR0dJTkcgVVRJTElUSUVTXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgcHVibGljIHBlcmZ0KGRlcHRoKSB7XG4gICAgICAgIGNvbnN0IG1vdmVzID0gdGhpcy5nZW5lcmF0ZV9tb3Zlcyh7IGxlZ2FsOiBmYWxzZSB9KTtcbiAgICAgICAgbGV0IG5vZGVzID0gMDtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLnR1cm47XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG1vdmVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLm1ha2VfbW92ZShtb3Zlc1tpXSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMua2luZ19hdHRhY2tlZChjb2xvcikpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVwdGggLSAxID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZF9ub2RlcyA9IHRoaXMucGVyZnQoZGVwdGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMgKz0gY2hpbGRfbm9kZXM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVuZG9fbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRTcXVhcmVzKCkge1xuICAgICAgICAvKiBmcm9tIHRoZSBFQ01BLTI2MiBzcGVjIChzZWN0aW9uIDEyLjYuNCk6XG4gICAgICAgICAqIFwiVGhlIG1lY2hhbmljcyBvZiBlbnVtZXJhdGluZyB0aGUgcHJvcGVydGllcyAuLi4gaXNcbiAgICAgICAgICogaW1wbGVtZW50YXRpb24gZGVwZW5kZW50XCJcbiAgICAgICAgICogc286IGZvciAodmFyIHNxIGluIFNRVUFSRVMpIHsga2V5cy5wdXNoKHNxKTsgfSBtaWdodCBub3QgYmVcbiAgICAgICAgICogb3JkZXJlZCBjb3JyZWN0bHlcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuU1FVQVJFUy5hODsgaSA8PSB0aGlzLlNRVUFSRVMuaDE7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgJiAweDg4KSB7IGkgKz0gNzsgY29udGludWU7IH1cbiAgICAgICAgICAgIGtleXMucHVzaCh0aGlzLmFsZ2VicmFpYyhpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE1vdmVzKG9wdGlvbnMpIHtcbiAgICAgICAgLyogVGhlIGludGVybmFsIHJlcHJlc2VudGF0aW9uIG9mIGEgY2hlc3MgbW92ZSBpcyBpbiAweDg4IGZvcm1hdCwgYW5kXG4gICAgICAgICAgICAgICAgICogbm90IG1lYW50IHRvIGJlIGh1bWFuLXJlYWRhYmxlLiAgVGhlIGNvZGUgYmVsb3cgY29udmVydHMgdGhlIDB4ODhcbiAgICAgICAgICAgICAgICAgKiBzcXVhcmUgY29vcmRpbmF0ZXMgdG8gYWxnZWJyYWljIGNvb3JkaW5hdGVzLiAgSXQgYWxzbyBwcnVuZXMgYW5cbiAgICAgICAgICAgICAgICAgKiB1bm5lY2Vzc2FyeSBtb3ZlIGtleXMgcmVzdWx0aW5nIGZyb20gYSB2ZXJib3NlIGNhbGwuXG4gICAgICAgICAgICAgICAgICovXG5cbiAgICAgICAgY29uc3QgdWdseV9tb3ZlcyA9IHRoaXMuZ2VuZXJhdGVfbW92ZXMob3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IG1vdmVzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHVnbHlfbW92ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblxuICAgICAgICAgICAgLyogZG9lcyB0aGUgdXNlciB3YW50IGEgZnVsbCBtb3ZlIG9iamVjdCAobW9zdCBsaWtlbHkgbm90KSwgb3IganVzdFxuICAgICAgICAgICAgICogU0FOXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3ZlcmJvc2UnIGluIG9wdGlvbnMgJiZcbiAgICAgICAgICAgICAgICBvcHRpb25zLnZlcmJvc2UpIHtcbiAgICAgICAgICAgICAgICBtb3Zlcy5wdXNoKHRoaXMubWFrZV9wcmV0dHkodWdseV9tb3Zlc1tpXSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb3Zlcy5wdXNoKHRoaXMubW92ZV90b19zYW4odWdseV9tb3Zlc1tpXSwgZmFsc2UpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtb3ZlcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGluX2RyYXcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhbGZfbW92ZXMgPj0gMTAwIHx8XG4gICAgICAgICAgICB0aGlzLmluX3N0YWxlbWF0ZSgpIHx8XG4gICAgICAgICAgICB0aGlzLmluc3VmZmljaWVudF9tYXRlcmlhbCgpIHx8XG4gICAgICAgICAgICB0aGlzLmluX3RocmVlZm9sZF9yZXBldGl0aW9uKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBnYW1lX292ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhbGZfbW92ZXMgPj0gMTAwIHx8XG4gICAgICAgICAgICB0aGlzLmluX2NoZWNrbWF0ZSgpIHx8XG4gICAgICAgICAgICB0aGlzLmluX3N0YWxlbWF0ZSgpIHx8XG4gICAgICAgICAgICB0aGlzLmluc3VmZmljaWVudF9tYXRlcmlhbCgpIHx8XG4gICAgICAgICAgICB0aGlzLmluX3RocmVlZm9sZF9yZXBldGl0aW9uKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBmZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlX2ZlbigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQZ24ob3B0aW9ucykge1xuICAgICAgICAvKiB1c2luZyB0aGUgc3BlY2lmaWNhdGlvbiBmcm9tIGh0dHA6Ly93d3cuY2hlc3NjbHViLmNvbS9oZWxwL1BHTi1zcGVjXG4gICAgICAgICAgICAgICAgICogZXhhbXBsZSBmb3IgaHRtbCB1c2FnZTogLnBnbih7IG1heF93aWR0aDogNzIsIG5ld2xpbmVfY2hhcjogXCI8YnIgLz5cIiB9KVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICBjb25zdCBuZXdsaW5lID0gKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubmV3bGluZV9jaGFyID09PSAnc3RyaW5nJykgP1xuICAgICAgICAgICAgb3B0aW9ucy5uZXdsaW5lX2NoYXIgOiAnXFxuJztcbiAgICAgICAgY29uc3QgbWF4X3dpZHRoID0gKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubWF4X3dpZHRoID09PSAnbnVtYmVyJykgP1xuICAgICAgICAgICAgb3B0aW9ucy5tYXhfd2lkdGggOiAwO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgbGV0IGhlYWRlcl9leGlzdHMgPSBmYWxzZTtcblxuICAgICAgICAvKiBhZGQgdGhlIFBHTiBoZWFkZXIgaGVhZGVycm1hdGlvbiAqL1xuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5oZWFkZXIpIHtcbiAgICAgICAgICAgIC8qIFRPRE86IG9yZGVyIG9mIGVudW1lcmF0ZWQgcHJvcGVydGllcyBpbiBoZWFkZXIgb2JqZWN0IGlzIG5vdFxuICAgICAgICAgICAgICogZ3VhcmFudGVlZCwgc2VlIEVDTUEtMjYyIHNwZWMgKHNlY3Rpb24gMTIuNi40KVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXN1bHQucHVzaCgnWycgKyBpICsgJyBcXFwiJyArIHRoaXMuaGVhZGVyW2ldICsgJ1xcXCJdJyArIG5ld2xpbmUpO1xuICAgICAgICAgICAgaGVhZGVyX2V4aXN0cyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGVhZGVyX2V4aXN0cyAmJiBoaXN0b3J5Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3bGluZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBwb3AgYWxsIG9mIGhpc3Rvcnkgb250byByZXZlcnNlZF9oaXN0b3J5ICovXG4gICAgICAgIGNvbnN0IHJldmVyc2VkX2hpc3RvcnkgPSBbXTtcbiAgICAgICAgd2hpbGUgKGhpc3RvcnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV2ZXJzZWRfaGlzdG9yeS5wdXNoKHRoaXMudW5kb19tb3ZlKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbW92ZXMgPSBbXTtcbiAgICAgICAgbGV0IG1vdmVfc3RyaW5nID0gJyc7XG5cbiAgICAgICAgLyogYnVpbGQgdGhlIGxpc3Qgb2YgbW92ZXMuICBhIG1vdmVfc3RyaW5nIGxvb2tzIGxpa2U6IFwiMy4gZTMgZTZcIiAqL1xuICAgICAgICB3aGlsZSAocmV2ZXJzZWRfaGlzdG9yeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBtb3ZlID0gcmV2ZXJzZWRfaGlzdG9yeS5wb3AoKTtcblxuICAgICAgICAgICAgLyogaWYgdGhlIHBvc2l0aW9uIHN0YXJ0ZWQgd2l0aCBibGFjayB0byBtb3ZlLCBzdGFydCBQR04gd2l0aCAxLiAuLi4gKi9cbiAgICAgICAgICAgIGlmICghaGlzdG9yeS5sZW5ndGggJiYgbW92ZS5jb2xvciA9PT0gJ2InKSB7XG4gICAgICAgICAgICAgICAgbW92ZV9zdHJpbmcgPSB0aGlzLm1vdmVfbnVtYmVyICsgJy4gLi4uJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobW92ZS5jb2xvciA9PT0gJ3cnKSB7XG4gICAgICAgICAgICAgICAgLyogc3RvcmUgdGhlIHByZXZpb3VzIGdlbmVyYXRlZCBtb3ZlX3N0cmluZyBpZiB3ZSBoYXZlIG9uZSAqL1xuICAgICAgICAgICAgICAgIGlmIChtb3ZlX3N0cmluZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbW92ZXMucHVzaChtb3ZlX3N0cmluZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1vdmVfc3RyaW5nID0gdGhpcy5tb3ZlX251bWJlciArICcuJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW92ZV9zdHJpbmcgPSBtb3ZlX3N0cmluZyArICcgJyArIHRoaXMubW92ZV90b19zYW4obW92ZSwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5tYWtlX21vdmUobW92ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBhcmUgdGhlcmUgYW55IG90aGVyIGxlZnRvdmVyIG1vdmVzPyAqL1xuICAgICAgICBpZiAobW92ZV9zdHJpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgICBtb3Zlcy5wdXNoKG1vdmVfc3RyaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGlzIHRoZXJlIGEgcmVzdWx0PyAqL1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuaGVhZGVyLlJlc3VsdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG1vdmVzLnB1c2godGhpcy5oZWFkZXIuUmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGhpc3Rvcnkgc2hvdWxkIGJlIGJhY2sgdG8gd2hhdCBpcyB3YXMgYmVmb3JlIHdlIHN0YXJ0ZWQgZ2VuZXJhdGluZyBQR04sXG4gICAgICAgICAqIHNvIGpvaW4gdG9nZXRoZXIgbW92ZXNcbiAgICAgICAgICovXG4gICAgICAgIGlmIChtYXhfd2lkdGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuam9pbignJykgKyBtb3Zlcy5qb2luKCcgJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiB3cmFwIHRoZSBQR04gb3V0cHV0IGF0IG1heF93aWR0aCAqL1xuICAgICAgICBsZXQgY3VycmVudF93aWR0aCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkyID0gMDsgaTIgPCBtb3Zlcy5sZW5ndGg7IGkyKyspIHtcbiAgICAgICAgICAgIC8qIGlmIHRoZSBjdXJyZW50IG1vdmUgd2lsbCBwdXNoIHBhc3QgbWF4X3dpZHRoICovXG4gICAgICAgICAgICBpZiAoY3VycmVudF93aWR0aCArIG1vdmVzW2kyXS5sZW5ndGggPiBtYXhfd2lkdGggJiYgaTIgIT09IDApIHtcblxuICAgICAgICAgICAgICAgIC8qIGRvbid0IGVuZCB0aGUgbGluZSB3aXRoIHdoaXRlc3BhY2UgKi9cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSA9PT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wb3AoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChuZXdsaW5lKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50X3dpZHRoID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaTIgIT09IDApIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCgnICcpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRfd2lkdGgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG1vdmVzW2kyXSk7XG4gICAgICAgICAgICBjdXJyZW50X3dpZHRoICs9IG1vdmVzW2kyXS5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0LmpvaW4oJycpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkX3BnbihwZ24sIG9wdGlvbnMpIHtcbiAgICAgICAgLy8gYWxsb3cgdGhlIHVzZXIgdG8gc3BlY2lmeSB0aGUgc2xvcHB5IG1vdmUgcGFyc2VyIHRvIHdvcmsgYXJvdW5kIG92ZXJcbiAgICAgICAgLy8gZGlzYW1iaWd1YXRpb24gYnVncyBpbiBGcml0eiBhbmQgQ2hlc3NiYXNlXG4gICAgICAgIGNvbnN0IHNsb3BweSA9ICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3Nsb3BweScgaW4gb3B0aW9ucykgP1xuICAgICAgICAgICAgb3B0aW9ucy5zbG9wcHkgOiBmYWxzZTtcblxuICAgICAgICBmdW5jdGlvbiBtYXNrKHN0cikge1xuICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFxcL2csICdcXFxcJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYXNfa2V5cyhvYmplY3QpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcGFyc2VfcGduX2hlYWRlcihoZWFkZXIsIGhPcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBoTmV3bGluZV9jaGFyID0gKHR5cGVvZiBoT3B0aW9ucyA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgaE9wdGlvbnMubmV3bGluZV9jaGFyID09PSAnc3RyaW5nJykgP1xuICAgICAgICAgICAgICAgIGhPcHRpb25zLm5ld2xpbmVfY2hhciA6ICdcXHI/XFxuJztcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcl9vYmogPSB7fTtcbiAgICAgICAgICAgIGNvbnN0IGxIZWFkZXJzID0gaGVhZGVyLnNwbGl0KG5ldyBSZWdFeHAobWFzayhoTmV3bGluZV9jaGFyKSkpO1xuICAgICAgICAgICAgbGV0IGtleSA9ICcnO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gJyc7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbEhlYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBrZXkgPSBsSGVhZGVyc1tpXS5yZXBsYWNlKC9eXFxbKFtBLVpdW0EtWmEtel0qKVxccy4qXFxdJC8sICckMScpO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbEhlYWRlcnNbaV0ucmVwbGFjZSgvXlxcW1tBLVphLXpdK1xcc1wiKC4qKVwiXFxdJC8sICckMScpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyaW0oa2V5KS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcl9vYmpba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGhlYWRlcl9vYmo7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdsaW5lX2NoYXIgPSAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5uZXdsaW5lX2NoYXIgPT09ICdzdHJpbmcnKSA/XG4gICAgICAgICAgICBvcHRpb25zLm5ld2xpbmVfY2hhciA6ICdcXHI/XFxuJztcbiAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCdeKFxcXFxbKC58JyArIG1hc2sobmV3bGluZV9jaGFyKSArICcpKlxcXFxdKScgK1xuICAgICAgICAgICAgJygnICsgbWFzayhuZXdsaW5lX2NoYXIpICsgJykqJyArXG4gICAgICAgICAgICAnMS4oJyArIG1hc2sobmV3bGluZV9jaGFyKSArICd8LikqJCcsICdnJyk7XG5cbiAgICAgICAgLyogZ2V0IGhlYWRlciBwYXJ0IG9mIHRoZSBQR04gZmlsZSAqL1xuICAgICAgICBsZXQgaGVhZGVyX3N0cmluZyA9IHBnbi5yZXBsYWNlKHJlZ2V4LCAnJDEnKTtcblxuICAgICAgICAvKiBubyBpbmZvIHBhcnQgZ2l2ZW4sIGJlZ2lucyB3aXRoIG1vdmVzICovXG4gICAgICAgIGlmIChoZWFkZXJfc3RyaW5nWzBdICE9PSAnWycpIHtcbiAgICAgICAgICAgIGhlYWRlcl9zdHJpbmcgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcblxuICAgICAgICAvKiBwYXJzZSBQR04gaGVhZGVyICovXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBwYXJzZV9wZ25faGVhZGVyKGhlYWRlcl9zdHJpbmcsIG9wdGlvbnMpO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBoZWFkZXJzKSB7XG4gICAgICAgICAgICB0aGlzLnNldF9oZWFkZXIoW2tleSwgaGVhZGVyc1trZXldXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBsb2FkIHRoZSBzdGFydGluZyBwb3NpdGlvbiBpbmRpY2F0ZWQgYnkgW1NldHVwICcxJ10gYW5kXG4gICAgICAgICogW0ZFTiBwb3NpdGlvbl0gKi9cbiAgICAgICAgaWYgKGhlYWRlcnNbJ1NldFVwJ10gPT09ICcxJykge1xuICAgICAgICAgICAgaWYgKCEoKCdGRU4nIGluIGhlYWRlcnMpICYmIHRoaXMubG9hZChoZWFkZXJzWydGRU4nXSkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyogZGVsZXRlIGhlYWRlciB0byBnZXQgdGhlIG1vdmVzICovXG4gICAgICAgIGxldCBtcyA9IHBnbi5yZXBsYWNlKGhlYWRlcl9zdHJpbmcsICcnKS5yZXBsYWNlKG5ldyBSZWdFeHAobWFzayhuZXdsaW5lX2NoYXIpLCAnZycpLCAnICcpO1xuXG4gICAgICAgIC8qIGRlbGV0ZSBjb21tZW50cyAqL1xuICAgICAgICBtcyA9IG1zLnJlcGxhY2UoLyhcXHtbXn1dK1xcfSkrPy9nLCAnJyk7XG5cbiAgICAgICAgLyogZGVsZXRlIHJlY3Vyc2l2ZSBhbm5vdGF0aW9uIHZhcmlhdGlvbnMgKi9cbiAgICAgICAgY29uc3QgcmF2X3JlZ2V4ID0gLyhcXChbXlxcKFxcKV0rXFwpKSs/L2c7XG4gICAgICAgIHdoaWxlIChyYXZfcmVnZXgudGVzdChtcykpIHtcbiAgICAgICAgICAgIG1zID0gbXMucmVwbGFjZShyYXZfcmVnZXgsICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGRlbGV0ZSBtb3ZlIG51bWJlcnMgKi9cbiAgICAgICAgbXMgPSBtcy5yZXBsYWNlKC9cXGQrXFwuKFxcLlxcLik/L2csICcnKTtcblxuICAgICAgICAvKiBkZWxldGUgLi4uIGluZGljYXRpbmcgYmxhY2sgdG8gbW92ZSAqL1xuICAgICAgICBtcyA9IG1zLnJlcGxhY2UoL1xcLlxcLlxcLi9nLCAnJyk7XG5cbiAgICAgICAgLyogZGVsZXRlIG51bWVyaWMgYW5ub3RhdGlvbiBnbHlwaHMgKi9cbiAgICAgICAgbXMgPSBtcy5yZXBsYWNlKC9cXCRcXGQrL2csICcnKTtcblxuICAgICAgICAvKiB0cmltIGFuZCBnZXQgYXJyYXkgb2YgbW92ZXMgKi9cbiAgICAgICAgbGV0IG1vdmVzID0gdGhpcy50cmltKG1zKS5zcGxpdChuZXcgUmVnRXhwKC9cXHMrLykpO1xuXG4gICAgICAgIC8qIGRlbGV0ZSBlbXB0eSBlbnRyaWVzICovXG4gICAgICAgIG1vdmVzID0gbW92ZXMuam9pbignLCcpLnJlcGxhY2UoLywsKy9nLCAnLCcpLnNwbGl0KCcsJyk7XG4gICAgICAgIGxldCBtb3ZlID0gJyc7XG5cbiAgICAgICAgZm9yIChsZXQgaGFsZl9tb3ZlID0gMDsgaGFsZl9tb3ZlIDwgbW92ZXMubGVuZ3RoIC0gMTsgaGFsZl9tb3ZlKyspIHtcbiAgICAgICAgICAgIG1vdmUgPSB0aGlzLm1vdmVfZnJvbV9zYW4obW92ZXNbaGFsZl9tb3ZlXSwgc2xvcHB5KTtcblxuICAgICAgICAgICAgLyogbW92ZSBub3QgcG9zc2libGUhIChkb24ndCBjbGVhciB0aGUgYm9hcmQgdG8gZXhhbWluZSB0byBzaG93IHRoZVxuICAgICAgICAgICAgICogbGF0ZXN0IHZhbGlkIHBvc2l0aW9uKVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAobW92ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1ha2VfbW92ZShtb3ZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGV4YW1pbmUgbGFzdCBtb3ZlICovXG4gICAgICAgIG1vdmUgPSBtb3Zlc1ttb3Zlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKHRoaXMuUE9TU0lCTEVfUkVTVUxUUy5pbmRleE9mKG1vdmUpID4gLTEpIHtcbiAgICAgICAgICAgIGlmIChoYXNfa2V5cyh0aGlzLmhlYWRlcikgJiYgdHlwZW9mIHRoaXMuaGVhZGVyLlJlc3VsdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9oZWFkZXIoWydSZXN1bHQnLCBtb3ZlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb3ZlID0gdGhpcy5tb3ZlX2Zyb21fc2FuKG1vdmUsIHNsb3BweSk7XG4gICAgICAgICAgICBpZiAobW92ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1ha2VfbW92ZShtb3ZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SGVhZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRfaGVhZGVyKGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmUobW92ZTogTW92ZSB8IHN0cmluZywgb3B0aW9ucz8pIHtcbiAgICAgICAgLyogVGhlIG1vdmUgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCB3aXRoIGluIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcbiAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAqIC5tb3ZlKCdOeGI3JykgICAgICA8LSB3aGVyZSAnbW92ZScgaXMgYSBjYXNlLXNlbnNpdGl2ZSBTQU4gc3RyaW5nXG4gICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgKiAubW92ZSh7IGZyb206ICdoNycsIDwtIHdoZXJlIHRoZSAnbW92ZScgaXMgYSBtb3ZlIG9iamVjdCAoYWRkaXRpb25hbFxuICAgICAgICAgICAgICAgICAqICAgICAgICAgdG8gOidoOCcsICAgICAgZmllbGRzIGFyZSBpZ25vcmVkKVxuICAgICAgICAgICAgICAgICAqICAgICAgICAgcHJvbW90aW9uOiAncScsXG4gICAgICAgICAgICAgICAgICogICAgICB9KVxuICAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgIC8vIGFsbG93IHRoZSB1c2VyIHRvIHNwZWNpZnkgdGhlIHNsb3BweSBtb3ZlIHBhcnNlciB0byB3b3JrIGFyb3VuZCBvdmVyXG4gICAgICAgIC8vIGRpc2FtYmlndWF0aW9uIGJ1Z3MgaW4gRnJpdHogYW5kIENoZXNzYmFzZVxuICAgICAgICBjb25zdCBzbG9wcHkgPSAodHlwZW9mIG9wdGlvbnMgIT09ICd1bmRlZmluZWQnICYmICdzbG9wcHknIGluIG9wdGlvbnMpID9cbiAgICAgICAgICAgIG9wdGlvbnMuc2xvcHB5IDogZmFsc2U7XG5cbiAgICAgICAgbGV0IG1vdmVfb2JqO1xuXG4gICAgICAgIGlmICh0eXBlb2YgbW92ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIG1vdmVfb2JqID0gdGhpcy5tb3ZlX2Zyb21fc2FuKG1vdmUsIHNsb3BweSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vdmUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCBtb3ZlcyA9IHRoaXMuZ2VuZXJhdGVfbW92ZXMoKTtcblxuICAgICAgICAgICAgLyogY29udmVydCB0aGUgcHJldHR5IG1vdmUgb2JqZWN0IHRvIGFuIHVnbHkgbW92ZSBvYmplY3QgKi9cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBtb3Zlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChtb3ZlLmZyb20gPT09IHRoaXMuYWxnZWJyYWljKG1vdmVzW2ldLmZyb20pICYmXG4gICAgICAgICAgICAgICAgICAgIG1vdmUudG8gPT09IHRoaXMuYWxnZWJyYWljKG1vdmVzW2ldLnRvKSAmJlxuICAgICAgICAgICAgICAgICAgICAoISgncHJvbW90aW9uJyBpbiBtb3Zlc1tpXSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmUucHJvbW90aW9uID09PSBtb3Zlc1tpXS5wcm9tb3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVfb2JqID0gbW92ZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGZhaWxlZCB0byBmaW5kIG1vdmUgKi9cbiAgICAgICAgaWYgKCFtb3ZlX29iaikge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIG5lZWQgdG8gbWFrZSBhIGNvcHkgb2YgbW92ZSBiZWNhdXNlIHdlIGNhbid0IGdlbmVyYXRlIFNBTiBhZnRlciB0aGVcbiAgICAgICAgICogbW92ZSBpcyBtYWRlXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBwcmV0dHlfbW92ZSA9IHRoaXMubWFrZV9wcmV0dHkobW92ZV9vYmopO1xuXG4gICAgICAgIHRoaXMubWFrZV9tb3ZlKG1vdmVfb2JqKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KCk7XG4gICAgICAgIHJldHVybiBwcmV0dHlfbW92ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdW5kbygpIHtcbiAgICAgICAgY29uc3QgbW92ZSA9IHRoaXMudW5kb19tb3ZlKCk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCgpO1xuICAgICAgICByZXR1cm4gKG1vdmUpID8gdGhpcy5tYWtlX3ByZXR0eShtb3ZlKSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3F1YXJlX2NvbG9yKHNxdWFyZSkge1xuICAgICAgICBpZiAoc3F1YXJlIGluIHRoaXMuU1FVQVJFUykge1xuICAgICAgICAgICAgY29uc3Qgc3FfMHg4OCA9IHRoaXMuU1FVQVJFU1tzcXVhcmVdO1xuICAgICAgICAgICAgcmV0dXJuICgodGhpcy5yYW5rKHNxXzB4ODgpICsgdGhpcy5maWxlKHNxXzB4ODgpKSAlIDIgPT09IDApID8gJ2xpZ2h0JyA6ICdkYXJrJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEhpc3Rvcnkob3B0aW9ucykge1xuICAgICAgICBjb25zdCByZXZlcnNlZF9oaXN0b3J5ID0gW107XG4gICAgICAgIGNvbnN0IG1vdmVfaGlzdG9yeSA9IFtdO1xuICAgICAgICBjb25zdCB2ZXJib3NlID0gKHR5cGVvZiBvcHRpb25zICE9PSAndW5kZWZpbmVkJyAmJiAndmVyYm9zZScgaW4gb3B0aW9ucyAmJlxuICAgICAgICAgICAgb3B0aW9ucy52ZXJib3NlKTtcblxuICAgICAgICB3aGlsZSAoaGlzdG9yeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXZlcnNlZF9oaXN0b3J5LnB1c2godGhpcy51bmRvX21vdmUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAocmV2ZXJzZWRfaGlzdG9yeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBtb3ZlID0gcmV2ZXJzZWRfaGlzdG9yeS5wb3AoKTtcbiAgICAgICAgICAgIGlmICh2ZXJib3NlKSB7XG4gICAgICAgICAgICAgICAgbW92ZV9oaXN0b3J5LnB1c2godGhpcy5tYWtlX3ByZXR0eShtb3ZlKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vdmVfaGlzdG9yeS5wdXNoKHRoaXMubW92ZV90b19zYW4obW92ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tYWtlX21vdmUobW92ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbW92ZV9oaXN0b3J5O1xuICAgIH1cblxufSAvLyBFbmQgb2YgQ2hlc3MgY2xhc3NcblxuZXhwb3J0IGNsYXNzIEZlblZhbGlkYXRpb25SZXN1bHQge1xuICAgIC8vIHsgdmFsaWQ6IHRydWUsIGVycm9yX251bWJlcjogMCwgZXJyb3I6IGVycm9yc1swXSB9O1xuICAgIHZhbGlkOiBib29sZWFuO1xuICAgIGVycm9yX251bWJlcjogbnVtYmVyO1xuICAgIGVycm9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBDaGVzc1BpZWNlIHtcbiAgICBjb2xvcjtcbiAgICB0eXBlO1xufVxuXG4vLyBlbnVtIENvbG91ciB7XG4vLyAgICAgV0hJVEUgPSAndycsXG4vLyAgICAgQkxBQ0sgPSAnYidcbi8vIH1cblxuY2xhc3MgQ2FzdGxpbmcge1xuICAgIHc6IGFueTtcbiAgICBiOiBhbnk7XG59XG5cblxuXG5cbiJdfQ==