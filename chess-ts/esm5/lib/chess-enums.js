/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* todo:
    make async and sync alternatives to the calling.
    bring enums into the chess.ts file.
    fix public/private variables
    make sure everything has an explicit type
    create separate classes game, fen, piece
    fix the todos
    add documentation and generate API doc
*/
/** @enum {string} */
var Colour = {
    WHITE: 'w',
    BLACK: 'b',
};
export { Colour };
/** @enum {string} */
var PieceType = {
    PAWN: 'p',
    KNIGHT: 'n',
    BISHOP: 'b',
    ROOK: 'r',
    QUEEN: 'q',
    KING: 'k',
};
export { PieceType };
var Move = /** @class */ (function () {
    function Move(from, to, promotion) {
        this.from = from;
        this.to = to;
        this.promotion = promotion;
    }
    return Move;
}());
export { Move };
if (false) {
    /** @type {?} */
    Move.prototype.from;
    /** @type {?} */
    Move.prototype.to;
    /** @type {?} */
    Move.prototype.promotion;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlc3MtZW51bXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jaGVzcy10cy8iLCJzb3VyY2VzIjpbImxpYi9jaGVzcy1lbnVtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFZSSxPQUFRLEdBQUc7SUFDWCxPQUFRLEdBQUc7Ozs7O0lBSVgsTUFBTyxHQUFHO0lBQ1YsUUFBUyxHQUFHO0lBQ1osUUFBUyxHQUFHO0lBQ1osTUFBTyxHQUFHO0lBQ1YsT0FBUSxHQUFHO0lBQ1gsTUFBTyxHQUFHOzs7QUFHZDtJQUNJLGNBQW1CLElBQVksRUFBUyxFQUFVLEVBQ3ZDLFNBQWtCO1FBRFYsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLE9BQUUsR0FBRixFQUFFLENBQVE7UUFDdkMsY0FBUyxHQUFULFNBQVMsQ0FBUztJQUFHLENBQUM7SUFDckMsV0FBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRmUsb0JBQW1COztJQUFFLGtCQUFpQjs7SUFDOUMseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiB0b2RvOlxuICAgIG1ha2UgYXN5bmMgYW5kIHN5bmMgYWx0ZXJuYXRpdmVzIHRvIHRoZSBjYWxsaW5nLlxuICAgIGJyaW5nIGVudW1zIGludG8gdGhlIGNoZXNzLnRzIGZpbGUuXG4gICAgZml4IHB1YmxpYy9wcml2YXRlIHZhcmlhYmxlc1xuICAgIG1ha2Ugc3VyZSBldmVyeXRoaW5nIGhhcyBhbiBleHBsaWNpdCB0eXBlXG4gICAgY3JlYXRlIHNlcGFyYXRlIGNsYXNzZXMgZ2FtZSwgZmVuLCBwaWVjZVxuICAgIGZpeCB0aGUgdG9kb3NcbiAgICBhZGQgZG9jdW1lbnRhdGlvbiBhbmQgZ2VuZXJhdGUgQVBJIGRvY1xuKi9cblxuZXhwb3J0IGVudW0gQ29sb3VyIHtcbiAgICBXSElURSA9ICd3JyxcbiAgICBCTEFDSyA9ICdiJ1xufVxuXG5leHBvcnQgZW51bSBQaWVjZVR5cGUge1xuICAgIFBBV04gPSAncCcsXG4gICAgS05JR0hUID0gJ24nLFxuICAgIEJJU0hPUCA9ICdiJyxcbiAgICBST09LID0gJ3InLFxuICAgIFFVRUVOID0gJ3EnLFxuICAgIEtJTkcgPSAnaydcbn1cblxuZXhwb3J0IGNsYXNzIE1vdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBmcm9tOiBzdHJpbmcsIHB1YmxpYyB0bzogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgcHJvbW90aW9uPzogc3RyaW5nKSB7fVxufSJdfQ==