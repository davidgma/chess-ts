(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/chess-ts/fesm5/chess-ts.js":
/*!*****************************************!*\
  !*** ./dist/chess-ts/fesm5/chess-ts.js ***!
  \*****************************************/
/*! exports provided: Chess, FenValidationResult, ChessPiece, Colour, PieceType, Move */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chess", function() { return Chess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FenValidationResult", function() { return FenValidationResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessPiece", function() { return ChessPiece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colour", function() { return Colour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieceType", function() { return PieceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Move", function() { return Move; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var Colour = {
    WHITE: 'w',
    BLACK: 'b',
};
/** @enum {string} */
var PieceType = {
    PAWN: 'p',
    KNIGHT: 'n',
    BISHOP: 'b',
    ROOK: 'r',
    QUEEN: 'q',
    KING: 'k',
};
var Move = /** @class */ (function () {
    function Move(from, to, promotion) {
        this.from = from;
        this.to = to;
        this.promotion = promotion;
    }
    return Move;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Chess = /** @class */ (function () {
    function Chess(fen) {
        this.EMPTY = -1;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
    Chess.prototype.clear = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    Chess.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.load(this.DEFAULT_POSITION);
    };
    /**
     * @param {?} fen
     * @return {?}
     */
    Chess.prototype.load = /**
     * @param {?} fen
     * @return {?}
     */
    function (fen) {
        /** @type {?} */
        var tokens = fen.split(/\s+/);
        /** @type {?} */
        var position = tokens[0];
        /** @type {?} */
        var square = 0;
        if (!this.validate_fen(fen).valid) {
            return false;
        }
        this.clear();
        for (var i = 0; i < position.length; i++) {
            /** @type {?} */
            var piece = position.charAt(i);
            if (piece === '/') {
                square += 8;
            }
            else if (this.is_digit(piece)) {
                square += parseInt(piece, 10);
            }
            else {
                /** @type {?} */
                var color = (piece < 'a') ? Colour.WHITE : Colour.BLACK;
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
    };
    /* TODO: this function is pretty much crap - it validates structure but
     * completely ignores content (e.g. doesn't verify that each side has a king)
     * ... we should rewrite this, and ditch the silly error_number field while
     * we're at it
     */
    /* TODO: this function is pretty much crap - it validates structure but
         * completely ignores content (e.g. doesn't verify that each side has a king)
         * ... we should rewrite this, and ditch the silly error_number field while
         * we're at it
         */
    /**
     * @param {?} fen
     * @return {?}
     */
    Chess.prototype.validate_fen = /* TODO: this function is pretty much crap - it validates structure but
         * completely ignores content (e.g. doesn't verify that each side has a king)
         * ... we should rewrite this, and ditch the silly error_number field while
         * we're at it
         */
    /**
     * @param {?} fen
     * @return {?}
     */
    function (fen) {
        /** @type {?} */
        var errors = {
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
        var tokens = fen.split(/\s+/);
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
        var rows = tokens[0].split('/');
        if (rows.length !== 8) {
            return { valid: false, error_number: 7, error: errors[7] };
        }
        /* 8th criterion: every row is valid? */
        for (var i = 0; i < rows.length; i++) {
            /* check for right sum of fields AND not two numbers in succession */
            /** @type {?} */
            var sum_fields = 0;
            /** @type {?} */
            var previous_was_number = false;
            for (var k = 0; k < rows[i].length; k++) {
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
    };
    /**
     * @return {?}
     */
    Chess.prototype.generate_fen = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var empty = 0;
        /** @type {?} */
        var fen = '';
        for (var i = this.SQUARES.a8; i <= this.SQUARES.h1; i++) {
            if (this.board[i] === undefined) {
                empty++;
            }
            else {
                if (empty > 0) {
                    fen += empty;
                    empty = 0;
                }
                /** @type {?} */
                var color = this.board[i].color;
                /** @type {?} */
                var piece = this.board[i].type;
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
        var cflags = '';
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
        var epflags = (this.ep_square === this.EMPTY) ? '-' : this.algebraic(this.ep_square);
        return [fen, this.turn, cflags, epflags, this.half_moves, this.move_number].join(' ');
    };
    /**
     * @param {?} args
     * @return {?}
     */
    Chess.prototype.set_header = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        for (var i = 0; i < args.length; i += 2) {
            if (typeof args[i] === 'string' &&
                typeof args[i + 1] === 'string') {
                this.header[args[i]] = args[i + 1];
            }
        }
        return this.header;
    };
    /* called when the initial board setup is changed with put() or remove().
     * modifies the SetUp and FEN properties of the header object.  if the FEN is
     * equal to the default position, the SetUp and FEN are deleted
     * the setup is only updated if history.length is zero, ie moves haven't been
     * made.
     */
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
    Chess.prototype.update_setup = /* called when the initial board setup is changed with put() or remove().
         * modifies the SetUp and FEN properties of the header object.  if the FEN is
         * equal to the default position, the SetUp and FEN are deleted
         * the setup is only updated if history.length is zero, ie moves haven't been
         * made.
         */
    /**
     * @param {?} fen
     * @return {?}
     */
    function (fen) {
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
    };
    /**
     * @param {?} square
     * @return {?}
     */
    Chess.prototype.get = /**
     * @param {?} square
     * @return {?}
     */
    function (square) {
        /** @type {?} */
        var piece = this.board[this.SQUARES[square]];
        return (piece) ? { type: piece.type, color: piece.color } : undefined;
    };
    /**
     * @param {?} piece
     * @param {?} square
     * @return {?}
     */
    Chess.prototype.put = /**
     * @param {?} piece
     * @param {?} square
     * @return {?}
     */
    function (piece, square) {
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
        var sq = this.SQUARES[square];
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
    };
    /**
     * @param {?} square
     * @return {?}
     */
    Chess.prototype.remove = /**
     * @param {?} square
     * @return {?}
     */
    function (square) {
        /** @type {?} */
        var piece = this.get(square);
        this.board[this.SQUARES[square]] = undefined;
        if (piece && piece.type === PieceType.KING) {
            this.kings[piece.color] = this.EMPTY;
        }
        this.update_setup(this.generate_fen());
        return piece;
    };
    /**
     * @param {?} board
     * @param {?} from
     * @param {?} to
     * @param {?} flags
     * @param {?=} promotion
     * @return {?}
     */
    Chess.prototype.build_move = /**
     * @param {?} board
     * @param {?} from
     * @param {?} to
     * @param {?} flags
     * @param {?=} promotion
     * @return {?}
     */
    function (board, from, to, flags, promotion) {
        /** @type {?} */
        var move = {
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
    };
    /**
     * @private
     * @param {?} board
     * @param {?} moves
     * @param {?} from
     * @param {?} to
     * @param {?} flags
     * @return {?}
     */
    Chess.prototype.add_move = /**
     * @private
     * @param {?} board
     * @param {?} moves
     * @param {?} from
     * @param {?} to
     * @param {?} flags
     * @return {?}
     */
    function (board, moves, from, to, flags) {
        /* if pawn promotion */
        if (board[from].type === PieceType.PAWN &&
            (this.rank(to) === this.RANK_8 || this.rank(to) === this.RANK_1)) {
            /** @type {?} */
            var pieces = [PieceType.QUEEN, PieceType.ROOK, PieceType.BISHOP, PieceType.KNIGHT];
            for (var i = 0, len = pieces.length; i < len; i++) {
                moves.push(this.build_move(board, from, to, flags, pieces[i]));
            }
        }
        else {
            moves.push(this.build_move(board, from, to, flags));
        }
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    Chess.prototype.generate_moves = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var moves = [];
        /** @type {?} */
        var us = this.turn;
        /** @type {?} */
        var them = this.swap_color(us);
        /** @type {?} */
        var second_rank = { b: this.RANK_7, w: this.RANK_2 };
        /** @type {?} */
        var first_sq = this.SQUARES.a8;
        /** @type {?} */
        var last_sq = this.SQUARES.h1;
        /** @type {?} */
        var single_square = false;
        /* do we want legal moves? */
        /** @type {?} */
        var legal = (typeof options !== 'undefined' && 'legal' in options) ?
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
        for (var i = first_sq; i <= last_sq; i++) {
            /* did we run off the end of the board */
            if (i & 0x88) {
                i += 7;
                continue;
            }
            /** @type {?} */
            var piece = this.board[i];
            if (piece === undefined || piece.color !== us) {
                continue;
            }
            if (piece.type === PieceType.PAWN) {
                /* single square, non-capturing */
                /** @type {?} */
                var square1 = i + this.PAWN_OFFSETS[us][0];
                if (this.board[square1] === undefined) {
                    this.add_move(this.board, moves, i, square1, this.BITS.NORMAL);
                    /* double square */
                    /** @type {?} */
                    var square = i + this.PAWN_OFFSETS[us][1];
                    if (second_rank[us] === this.rank(i) && this.board[square] === undefined) {
                        this.add_move(this.board, moves, i, square, this.BITS.BIG_PAWN);
                    }
                }
                /* pawn captures */
                for (var j = 2; j < 4; j++) {
                    /** @type {?} */
                    var square = i + this.PAWN_OFFSETS[us][j];
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
                for (var j = 0, len = this.PIECE_OFFSETS[piece.type].length; j < len; j++) {
                    /** @type {?} */
                    var offset = this.PIECE_OFFSETS[piece.type][j];
                    /** @type {?} */
                    var square = i;
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
                var castling_from = this.kings[us];
                /** @type {?} */
                var castling_to = castling_from + 2;
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
                var castling_from = this.kings[us];
                /** @type {?} */
                var castling_to = castling_from - 2;
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
        var legal_moves = [];
        for (var i = 0, len = moves.length; i < len; i++) {
            this.make_move(moves[i]);
            if (!this.king_attacked(us)) {
                legal_moves.push(moves[i]);
            }
            this.undo_move();
        }
        return legal_moves;
    };
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
    Chess.prototype.move_to_san = /* convert a move from 0x88 coordinates to Standard Algebraic Notation
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
    function (move, sloppy) {
        /** @type {?} */
        var output = '';
        if (move.flags & this.BITS.KSIDE_CASTLE) {
            output = 'O-O';
        }
        else if (move.flags & this.BITS.QSIDE_CASTLE) {
            output = 'O-O-O';
        }
        else {
            /** @type {?} */
            var disambiguator = this.get_disambiguator(move, sloppy);
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
    };
    // parses all of the decorators out of a SAN string
    // parses all of the decorators out of a SAN string
    /**
     * @param {?} move
     * @return {?}
     */
    Chess.prototype.stripped_san = 
    // parses all of the decorators out of a SAN string
    /**
     * @param {?} move
     * @return {?}
     */
    function (move) {
        return move.replace(/=/, '').replace(/[+#]?[?!]*$/, '');
    };
    /**
     * @param {?} color
     * @param {?} square
     * @return {?}
     */
    Chess.prototype.attacked = /**
     * @param {?} color
     * @param {?} square
     * @return {?}
     */
    function (color, square) {
        for (var i = this.SQUARES.a8; i <= this.SQUARES.h1; i++) {
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
            var piece = this.board[i];
            /** @type {?} */
            var difference = i - square;
            /** @type {?} */
            var index = difference + 119;
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
                var offset = this.RAYS[index];
                /** @type {?} */
                var j = i + offset;
                /** @type {?} */
                var blocked = false;
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
    };
    /**
     * @param {?} color
     * @return {?}
     */
    Chess.prototype.king_attacked = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        return this.attacked(this.swap_color(color), this.kings[color]);
    };
    /**
     * @return {?}
     */
    Chess.prototype.in_check = /**
     * @return {?}
     */
    function () {
        return this.king_attacked(this.turn);
    };
    /**
     * @return {?}
     */
    Chess.prototype.in_checkmate = /**
     * @return {?}
     */
    function () {
        return this.in_check() && this.generate_moves().length === 0;
    };
    /**
     * @return {?}
     */
    Chess.prototype.in_stalemate = /**
     * @return {?}
     */
    function () {
        return !this.in_check() && this.generate_moves().length === 0;
    };
    /**
     * @return {?}
     */
    Chess.prototype.insufficient_material = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pieces = {};
        /** @type {?} */
        var bishops = [];
        /** @type {?} */
        var num_pieces = 0;
        /** @type {?} */
        var sq_color = 0;
        for (var i = this.SQUARES.a8; i <= this.SQUARES.h1; i++) {
            sq_color = (sq_color + 1) % 2;
            if (i & 0x88) {
                i += 7;
                continue;
            }
            /** @type {?} */
            var piece = this.board[i];
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
            var sum = 0;
            /** @type {?} */
            var len = bishops.length;
            for (var i = 0; i < len; i++) {
                sum += bishops[i];
            }
            if (sum === 0 || sum === len) {
                return true;
            }
        }
        return false;
    };
    /**
     * @return {?}
     */
    Chess.prototype.in_threefold_repetition = /**
     * @return {?}
     */
    function () {
        /* TODO: while this function is fine for casual use, a better
                 * implementation would use a Zobrist key (instead of FEN). the
                 * Zobrist key would be maintained in the make_move/undo_move functions,
                 * avoiding the costly that we do below.
                 */
        /** @type {?} */
        var moves = [];
        /** @type {?} */
        var positions = {};
        /** @type {?} */
        var repetition = false;
        while (true) {
            /** @type {?} */
            var move = this.undo_move();
            if (!move) {
                break;
            }
            moves.push(move);
        }
        while (true) {
            /* remove the last two fields in the FEN string, they're not needed
                         * when checking for draw by rep */
            /** @type {?} */
            var fen = this.generate_fen().split(' ').slice(0, 4).join(' ');
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
    };
    /**
     * @param {?} move
     * @return {?}
     */
    Chess.prototype.push = /**
     * @param {?} move
     * @return {?}
     */
    function (move) {
        this.history.push({
            move: move,
            kings: { b: this.kings.b, w: this.kings.w },
            turn: this.turn,
            castling: { b: this.castling.b, w: this.castling.w },
            ep_square: this.ep_square,
            half_moves: this.half_moves,
            move_number: this.move_number
        });
    };
    /**
     * @param {?} move
     * @return {?}
     */
    Chess.prototype.make_move = /**
     * @param {?} move
     * @return {?}
     */
    function (move) {
        /** @type {?} */
        var us = this.turn;
        /** @type {?} */
        var them = this.swap_color(us);
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
                var castling_to = move.to - 1;
                /** @type {?} */
                var castling_from = move.to + 1;
                this.board[castling_to] = this.board[castling_from];
                this.board[castling_from] = undefined;
            }
            else if (move.flags & this.BITS.QSIDE_CASTLE) {
                /** @type {?} */
                var castling_to2 = move.to + 1;
                /** @type {?} */
                var castling_from2 = move.to - 2;
                this.board[castling_to2] = this.board[castling_from2];
                this.board[castling_from2] = undefined;
            }
            /* turn off castling */
            this.castling[us] = '';
        }
        /* turn off castling if we move a rook */
        if (this.castling[us]) {
            for (var i = 0, len = this.ROOKS[us].length; i < len; i++) {
                if (move.from === this.ROOKS[us][i].square &&
                    this.castling[us] & this.ROOKS[us][i].flag) {
                    this.castling[us] ^= this.ROOKS[us][i].flag;
                    break;
                }
            }
        }
        /* turn off castling if we capture a rook */
        if (this.castling[them]) {
            for (var i = 0, len = this.ROOKS[them].length; i < len; i++) {
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
    };
    /**
     * @return {?}
     */
    Chess.prototype.undo_move = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var old = this.history.pop();
        if (old === undefined) {
            return undefined;
        }
        /** @type {?} */
        var move = old.move;
        this.kings = old.kings;
        this.turn = old.turn;
        this.castling = old.castling;
        this.ep_square = old.ep_square;
        this.half_moves = old.half_moves;
        this.move_number = old.move_number;
        /** @type {?} */
        var us = this.turn;
        /** @type {?} */
        var them = this.swap_color(this.turn);
        this.board[move.from] = this.board[move.to];
        this.board[move.from].type = move.piece; // to undo any promotions
        this.board[move.to] = undefined;
        if (move.flags & this.BITS.CAPTURE) {
            this.board[move.to] = { type: move.captured, color: them };
        }
        else if (move.flags & this.BITS.EP_CAPTURE) {
            /** @type {?} */
            var index = void 0;
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
            var castling_to = void 0;
            /** @type {?} */
            var castling_from = void 0;
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
    };
    /* this function is used to uniquely identify ambiguous moves */
    /* this function is used to uniquely identify ambiguous moves */
    /**
     * @param {?} move
     * @param {?} sloppy
     * @return {?}
     */
    Chess.prototype.get_disambiguator = /* this function is used to uniquely identify ambiguous moves */
    /**
     * @param {?} move
     * @param {?} sloppy
     * @return {?}
     */
    function (move, sloppy) {
        /** @type {?} */
        var moves = this.generate_moves({ legal: !sloppy });
        /** @type {?} */
        var from = move.from;
        /** @type {?} */
        var to = move.to;
        /** @type {?} */
        var piece = move.piece;
        /** @type {?} */
        var ambiguities = 0;
        /** @type {?} */
        var same_rank = 0;
        /** @type {?} */
        var same_file = 0;
        for (var i = 0, len = moves.length; i < len; i++) {
            /** @type {?} */
            var ambig_from = moves[i].from;
            /** @type {?} */
            var ambig_to = moves[i].to;
            /** @type {?} */
            var ambig_piece = moves[i].piece;
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
    };
    /**
     * @return {?}
     */
    Chess.prototype.ascii = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var s = '   +------------------------+\n';
        for (var i = this.SQUARES.a8; i <= this.SQUARES.h1; i++) {
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
                var piece = this.board[i].type;
                /** @type {?} */
                var color = this.board[i].color;
                /** @type {?} */
                var symbol = (color === Colour.WHITE) ?
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
    };
    // convert a move from Standard Algebraic Notation (SAN) to 0x88 coordinates
    // convert a move from Standard Algebraic Notation (SAN) to 0x88 coordinates
    /**
     * @param {?} move
     * @param {?} sloppy
     * @return {?}
     */
    Chess.prototype.move_from_san = 
    // convert a move from Standard Algebraic Notation (SAN) to 0x88 coordinates
    /**
     * @param {?} move
     * @param {?} sloppy
     * @return {?}
     */
    function (move, sloppy) {
        // strip off any move decorations: e.g Nf3+?!
        /** @type {?} */
        var clean_move = this.stripped_san(move);
        // if we're using the sloppy parser run a regex to grab piece, to, and from
        // this should parse invalid SAN like: Pe2-e4, Rc1c4, Qf3xf7
        /** @type {?} */
        var matches = clean_move.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);
        /** @type {?} */
        var piece;
        /** @type {?} */
        var from;
        /** @type {?} */
        var to;
        /** @type {?} */
        var promotion;
        if (sloppy) {
            if (matches) {
                piece = matches[1];
                from = matches[2];
                to = matches[3];
                promotion = matches[4];
            }
        }
        /** @type {?} */
        var moves = this.generate_moves();
        for (var i = 0, len = moves.length; i < len; i++) {
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
    };
    /*****************************************************************************
     * UTILITY FUNCTIONS
     ****************************************************************************/
    /**
     * **************************************************************************
     * UTILITY FUNCTIONS
     * **************************************************************************
     * @param {?} i
     * @return {?}
     */
    Chess.prototype.rank = /**
     * **************************************************************************
     * UTILITY FUNCTIONS
     * **************************************************************************
     * @param {?} i
     * @return {?}
     */
    function (i) {
        return i >> 4;
    };
    /**
     * @param {?} i
     * @return {?}
     */
    Chess.prototype.file = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        return i & 15;
    };
    /**
     * @param {?} i
     * @return {?}
     */
    Chess.prototype.algebraic = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        /** @type {?} */
        var f = this.file(i);
        /** @type {?} */
        var r = this.rank(i);
        return 'abcdefgh'.substring(f, f + 1) + '87654321'.substring(r, r + 1);
    };
    /**
     * @param {?} c
     * @return {?}
     */
    Chess.prototype.swap_color = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return c === Colour.WHITE ? Colour.BLACK : Colour.WHITE;
    };
    /**
     * @param {?} c
     * @return {?}
     */
    Chess.prototype.is_digit = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return '0123456789'.indexOf(c) !== -1;
    };
    /* pretty = external move object */
    /* pretty = external move object */
    /**
     * @param {?} ugly_move
     * @return {?}
     */
    Chess.prototype.make_pretty = /* pretty = external move object */
    /**
     * @param {?} ugly_move
     * @return {?}
     */
    function (ugly_move) {
        /** @type {?} */
        var move = this.clone(ugly_move);
        move.san = this.move_to_san(move, false);
        move.to = this.algebraic(move.to);
        move.from = this.algebraic(move.from);
        /** @type {?} */
        var flags = '';
        for (var flag in this.BITS) {
            if (this.BITS[flag] & move.flags) {
                flags += this.FLAGS[flag];
            }
        }
        move.flags = flags;
        return move;
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    Chess.prototype.clone = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        /** @type {?} */
        var dupe = (obj instanceof Array) ? [] : {};
        for (var property in obj) {
            if (typeof property === 'object') {
                dupe[property] = this.clone(obj[property]);
            }
            else {
                dupe[property] = obj[property];
            }
        }
        return dupe;
    };
    /**
     * @param {?} str
     * @return {?}
     */
    Chess.prototype.trim = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.replace(/^\s+|\s+$/g, '');
    };
    /*****************************************************************************
     * DEBUGGING UTILITIES
     ****************************************************************************/
    /**
     * **************************************************************************
     * DEBUGGING UTILITIES
     * **************************************************************************
     * @param {?} depth
     * @return {?}
     */
    Chess.prototype.perft = /**
     * **************************************************************************
     * DEBUGGING UTILITIES
     * **************************************************************************
     * @param {?} depth
     * @return {?}
     */
    function (depth) {
        /** @type {?} */
        var moves = this.generate_moves({ legal: false });
        /** @type {?} */
        var nodes = 0;
        /** @type {?} */
        var color = this.turn;
        for (var i = 0, len = moves.length; i < len; i++) {
            this.make_move(moves[i]);
            if (!this.king_attacked(color)) {
                if (depth - 1 > 0) {
                    /** @type {?} */
                    var child_nodes = this.perft(depth - 1);
                    nodes += child_nodes;
                }
                else {
                    nodes++;
                }
            }
            this.undo_move();
        }
        return nodes;
    };
    /**
     * @return {?}
     */
    Chess.prototype.getSquares = /**
     * @return {?}
     */
    function () {
        /* from the ECMA-262 spec (section 12.6.4):
                 * "The mechanics of enumerating the properties ... is
                 * implementation dependent"
                 * so: for (var sq in SQUARES) { keys.push(sq); } might not be
                 * ordered correctly
                 */
        /** @type {?} */
        var keys = [];
        for (var i = this.SQUARES.a8; i <= this.SQUARES.h1; i++) {
            if (i & 0x88) {
                i += 7;
                continue;
            }
            keys.push(this.algebraic(i));
        }
        return keys;
    };
    /**
     * @param {?} options
     * @return {?}
     */
    Chess.prototype.getMoves = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
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
        var ugly_moves = this.generate_moves(options);
        /** @type {?} */
        var moves = [];
        for (var i = 0, len = ugly_moves.length; i < len; i++) {
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
    };
    Object.defineProperty(Chess.prototype, "in_draw", {
        get: /**
         * @return {?}
         */
        function () {
            return this.half_moves >= 100 ||
                this.in_stalemate() ||
                this.insufficient_material() ||
                this.in_threefold_repetition();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chess.prototype, "game_over", {
        get: /**
         * @return {?}
         */
        function () {
            return this.half_moves >= 100 ||
                this.in_checkmate() ||
                this.in_stalemate() ||
                this.insufficient_material() ||
                this.in_threefold_repetition();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chess.prototype, "fen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.generate_fen();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} options
     * @return {?}
     */
    Chess.prototype.getPgn = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /* using the specification from http://www.chessclub.com/help/PGN-spec
                         * example for html usage: .pgn({ max_width: 72, newline_char: "<br />" })
                         */
        /** @type {?} */
        var newline = (typeof options === 'object' &&
            typeof options.newline_char === 'string') ?
            options.newline_char : '\n';
        /** @type {?} */
        var max_width = (typeof options === 'object' &&
            typeof options.max_width === 'number') ?
            options.max_width : 0;
        /** @type {?} */
        var result = [];
        /** @type {?} */
        var header_exists = false;
        /* add the PGN header headerrmation */
        for (var i in this.header) {
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
        var reversed_history = [];
        while (history.length > 0) {
            reversed_history.push(this.undo_move());
        }
        /** @type {?} */
        var moves = [];
        /** @type {?} */
        var move_string = '';
        /* build the list of moves.  a move_string looks like: "3. e3 e6" */
        while (reversed_history.length > 0) {
            /** @type {?} */
            var move = reversed_history.pop();
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
        var current_width = 0;
        for (var i2 = 0; i2 < moves.length; i2++) {
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
    };
    /**
     * @param {?} pgn
     * @param {?} options
     * @return {?}
     */
    Chess.prototype.load_pgn = /**
     * @param {?} pgn
     * @param {?} options
     * @return {?}
     */
    function (pgn, options) {
        // allow the user to specify the sloppy move parser to work around over
        // disambiguation bugs in Fritz and Chessbase
        /** @type {?} */
        var sloppy = (typeof options !== 'undefined' && 'sloppy' in options) ?
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
            for (var key in object) {
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
            var hNewline_char = (typeof hOptions === 'object' &&
                typeof hOptions.newline_char === 'string') ?
                hOptions.newline_char : '\r?\n';
            /** @type {?} */
            var header_obj = {};
            /** @type {?} */
            var lHeaders = header.split(new RegExp(mask(hNewline_char)));
            /** @type {?} */
            var key = '';
            /** @type {?} */
            var value = '';
            for (var i = 0; i < lHeaders.length; i++) {
                key = lHeaders[i].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/, '$1');
                value = lHeaders[i].replace(/^\[[A-Za-z]+\s"(.*)"\]$/, '$1');
                if (this.trim(key).length > 0) {
                    header_obj[key] = value;
                }
            }
            return header_obj;
        }
        /** @type {?} */
        var newline_char = (typeof options === 'object' &&
            typeof options.newline_char === 'string') ?
            options.newline_char : '\r?\n';
        /** @type {?} */
        var regex = new RegExp('^(\\[(.|' + mask(newline_char) + ')*\\])' +
            '(' + mask(newline_char) + ')*' +
            '1.(' + mask(newline_char) + '|.)*$', 'g');
        /* get header part of the PGN file */
        /** @type {?} */
        var header_string = pgn.replace(regex, '$1');
        /* no info part given, begins with moves */
        if (header_string[0] !== '[') {
            header_string = '';
        }
        this.reset();
        /* parse PGN header */
        /** @type {?} */
        var headers = parse_pgn_header(header_string, options);
        for (var key in headers) {
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
        var ms = pgn.replace(header_string, '').replace(new RegExp(mask(newline_char), 'g'), ' ');
        /* delete comments */
        ms = ms.replace(/(\{[^}]+\})+?/g, '');
        /* delete recursive annotation variations */
        /** @type {?} */
        var rav_regex = /(\([^\(\)]+\))+?/g;
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
        var moves = this.trim(ms).split(new RegExp(/\s+/));
        /* delete empty entries */
        moves = moves.join(',').replace(/,,+/g, ',').split(',');
        /** @type {?} */
        var move = '';
        for (var half_move = 0; half_move < moves.length - 1; half_move++) {
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
    };
    /**
     * @return {?}
     */
    Chess.prototype.getHeader = /**
     * @return {?}
     */
    function () {
        return this.set_header(arguments);
    };
    /**
     * @param {?} move
     * @param {?=} options
     * @return {?}
     */
    Chess.prototype.move = /**
     * @param {?} move
     * @param {?=} options
     * @return {?}
     */
    function (move, options) {
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
        var sloppy = (typeof options !== 'undefined' && 'sloppy' in options) ?
            options.sloppy : false;
        /** @type {?} */
        var move_obj;
        if (typeof move === 'string') {
            move_obj = this.move_from_san(move, sloppy);
        }
        else if (typeof move === 'object') {
            /** @type {?} */
            var moves = this.generate_moves();
            /* convert the pretty move object to an ugly move object */
            for (var i = 0, len = moves.length; i < len; i++) {
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
        var pretty_move = this.make_pretty(move_obj);
        this.make_move(move_obj);
        this.onChange.emit();
        return pretty_move;
    };
    /**
     * @return {?}
     */
    Chess.prototype.undo = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var move = this.undo_move();
        this.onChange.emit();
        return (move) ? this.make_pretty(move) : undefined;
    };
    /**
     * @param {?} square
     * @return {?}
     */
    Chess.prototype.square_color = /**
     * @param {?} square
     * @return {?}
     */
    function (square) {
        if (square in this.SQUARES) {
            /** @type {?} */
            var sq_0x88 = this.SQUARES[square];
            return ((this.rank(sq_0x88) + this.file(sq_0x88)) % 2 === 0) ? 'light' : 'dark';
        }
        return undefined;
    };
    /**
     * @param {?} options
     * @return {?}
     */
    Chess.prototype.getHistory = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var reversed_history = [];
        /** @type {?} */
        var move_history = [];
        /** @type {?} */
        var verbose = (typeof options !== 'undefined' && 'verbose' in options &&
            options.verbose);
        while (history.length > 0) {
            reversed_history.push(this.undo_move());
        }
        while (reversed_history.length > 0) {
            /** @type {?} */
            var move = reversed_history.pop();
            if (verbose) {
                move_history.push(this.make_pretty(move));
            }
            else {
                move_history.push(this.move_to_san(move));
            }
            this.make_move(move);
        }
        return move_history;
    };
    return Chess;
}()); // End of Chess class
// End of Chess class
var  
// End of Chess class
FenValidationResult = /** @class */ (function () {
    function FenValidationResult() {
    }
    return FenValidationResult;
}());
var ChessPiece = /** @class */ (function () {
    function ChessPiece() {
    }
    return ChessPiece;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=chess-ts.js.map

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bullets {\n    list-style-type: none;\n    display: inline-block; \n    font-weight: normal;\n    padding-left: 5px;\n    word-break: break-all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsc0JBQXNCO0NBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnVsbGV0cyB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n \n  <section>\n    <ul class=\"bullets\">\n        <li *ngFor=\"let line of output\">{{ line }}</li>\n    </ul>\n</section>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chess_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chess-ts */ "./dist/chess-ts/fesm5/chess-ts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'chess-ts-app';
        this.output = new Array();
    }
    AppComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) {
                    var chess = new chess_ts__WEBPACK_IMPORTED_MODULE_1__["Chess"]();
                    _this.output.push("Starting fen: " + chess.fen);
                });
                return [2 /*return*/];
            });
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/david/local/dev/chess-ts/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map