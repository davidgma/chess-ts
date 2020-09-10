/* todo:
    make async and sync alternatives to the calling.
    bring enums into the chess.ts file.
    fix public/private variables
    make sure everything has an explicit type
    create separate classes game, fen, piece
    fix the todos
    add documentation and generate API doc
*/
export var Colour;
(function (Colour) {
    Colour["WHITE"] = "w";
    Colour["BLACK"] = "b";
})(Colour || (Colour = {}));
export var PieceType;
(function (PieceType) {
    PieceType["PAWN"] = "p";
    PieceType["KNIGHT"] = "n";
    PieceType["BISHOP"] = "b";
    PieceType["ROOK"] = "r";
    PieceType["QUEEN"] = "q";
    PieceType["KING"] = "k";
})(PieceType || (PieceType = {}));
export class Move {
    constructor(from, to, promotion) {
        this.from = from;
        this.to = to;
        this.promotion = promotion;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlc3MtZW51bXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jaGVzcy10cy9zcmMvbGliL2NoZXNzLWVudW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzs7Ozs7OztFQVFFO0FBRUYsTUFBTSxDQUFOLElBQVksTUFHWDtBQUhELFdBQVksTUFBTTtJQUNkLHFCQUFXLENBQUE7SUFDWCxxQkFBVyxDQUFBO0FBQ2YsQ0FBQyxFQUhXLE1BQU0sS0FBTixNQUFNLFFBR2pCO0FBRUQsTUFBTSxDQUFOLElBQVksU0FPWDtBQVBELFdBQVksU0FBUztJQUNqQix1QkFBVSxDQUFBO0lBQ1YseUJBQVksQ0FBQTtJQUNaLHlCQUFZLENBQUE7SUFDWix1QkFBVSxDQUFBO0lBQ1Ysd0JBQVcsQ0FBQTtJQUNYLHVCQUFVLENBQUE7QUFDZCxDQUFDLEVBUFcsU0FBUyxLQUFULFNBQVMsUUFPcEI7QUFFRCxNQUFNLE9BQU8sSUFBSTtJQUNiLFlBQW1CLElBQVksRUFBUyxFQUFVLEVBQ3ZDLFNBQWtCO1FBRFYsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLE9BQUUsR0FBRixFQUFFLENBQVE7UUFDdkMsY0FBUyxHQUFULFNBQVMsQ0FBUztJQUFHLENBQUM7Q0FDcEMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIHRvZG86XG4gICAgbWFrZSBhc3luYyBhbmQgc3luYyBhbHRlcm5hdGl2ZXMgdG8gdGhlIGNhbGxpbmcuXG4gICAgYnJpbmcgZW51bXMgaW50byB0aGUgY2hlc3MudHMgZmlsZS5cbiAgICBmaXggcHVibGljL3ByaXZhdGUgdmFyaWFibGVzXG4gICAgbWFrZSBzdXJlIGV2ZXJ5dGhpbmcgaGFzIGFuIGV4cGxpY2l0IHR5cGVcbiAgICBjcmVhdGUgc2VwYXJhdGUgY2xhc3NlcyBnYW1lLCBmZW4sIHBpZWNlXG4gICAgZml4IHRoZSB0b2Rvc1xuICAgIGFkZCBkb2N1bWVudGF0aW9uIGFuZCBnZW5lcmF0ZSBBUEkgZG9jXG4qL1xuXG5leHBvcnQgZW51bSBDb2xvdXIge1xuICAgIFdISVRFID0gJ3cnLFxuICAgIEJMQUNLID0gJ2InXG59XG5cbmV4cG9ydCBlbnVtIFBpZWNlVHlwZSB7XG4gICAgUEFXTiA9ICdwJyxcbiAgICBLTklHSFQgPSAnbicsXG4gICAgQklTSE9QID0gJ2InLFxuICAgIFJPT0sgPSAncicsXG4gICAgUVVFRU4gPSAncScsXG4gICAgS0lORyA9ICdrJ1xufVxuXG5leHBvcnQgY2xhc3MgTW92ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGZyb206IHN0cmluZywgcHVibGljIHRvOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBwcm9tb3Rpb24/OiBzdHJpbmcpIHt9XG59Il19