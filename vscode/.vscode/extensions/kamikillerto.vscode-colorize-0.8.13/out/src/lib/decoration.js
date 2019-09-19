"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const color_util_1 = require("./util/color-util");
class Decoration {
    constructor(color, line) {
        /**
         * Keep track of the TextEditorDecorationType status
         *
         * @type {boolean}
         * @public
         * @memberOf ColorDecoration
         */
        this.disposed = false;
        this.hidden = false;
        this.color = color;
        this.generateRange(line);
        // if (this.variable.color) {
        //   this.generateRange(line);
        // } else {
        //   this.currentRange = new Range(new Position(line, 0), new Position(line, 0));
        // }
    }
    /**
     * The TextEditorDecorationType associated to the color
     *
     * @type {TextEditorDecorationType}
     * @memberOf ColorDecoration
     */
    get decoration() {
        this._generateDecorator();
        return this._decoration;
    }
    set decoration(deco) {
        debugger;
        this._decoration = deco;
    }
    get rgb() {
        return this.color.rgb;
    }
    /**
     * Disposed the TextEditorDecorationType
     * (destroy the colored background)
     *
     * @public
     * @memberOf ColorDecoration
     */
    dispose() {
        try {
            this._decoration.dispose();
            this.color.dispose();
            // this.variable.color.rgb = null;
        }
        catch (error) { }
        this.disposed = true;
    }
    hide() {
        if (this._decoration) {
            this._decoration.dispose();
        }
        this.hidden = true;
    }
    /**
     * Generate the decoration Range (start and end position in line)
     *
     * @param {number} line
     * @returns {Range}
     *
     * @memberOf ColorDecoration
     */
    generateRange(line) {
        let range = new vscode_1.Range(new vscode_1.Position(line, 0), new vscode_1.Position(line, 0));
        if (this.color.value) {
            range = new vscode_1.Range(new vscode_1.Position(line, this.color.positionInText), new vscode_1.Position(line, this.color.positionInText + this.color.value.length));
        }
        this.currentRange = range;
        return range;
    }
    shouldGenerateDecoration() {
        let color = this.color.getColor();
        // let color: Color | null = VariablesManager.findVariable(this.variable);
        if (this.disposed === true || color === null) {
            return false;
        }
        return (this._decoration === null || this._decoration === undefined || this.hidden);
    }
    _generateDecorator() {
        // let color = VariablesManager.findVariable(this.variable);
        // if (color && this.variable.color !== color) {
        //   this.variable.color = color;
        // }
        if (this.color.hasChanged()) {
            this.color = this.color.getColor();
        }
        if (this.shouldGenerateDecoration()) {
            // if (this.variable.color && this.variable.color.rgb) {
            let backgroundDecorationType = vscode_1.window.createTextEditorDecorationType({
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: this.color.toRgbString(),
                backgroundColor: this.color.toRgbString(),
                color: color_util_1.generateOptimalTextColor(this.color),
                rangeBehavior: vscode_1.DecorationRangeBehavior.ClosedClosed
            });
            this._decoration = backgroundDecorationType;
        }
    }
}
exports.default = Decoration;
//# sourceMappingURL=decoration.js.map