"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const variables_manager_1 = require("./variables-manager");
class Variable {
    get rgb() {
        return this.color.rgb;
    }
    set rgb(value) {
        this.color.rgb = value;
    }
    get alpha() {
        return this.color.alpha;
    }
    set alpha(value) {
        this.color.alpha = value;
    }
    get positionInText() {
        return this.color.positionInText;
    }
    get value() {
        return this.color.value;
    }
    constructor(name, color, location, type) {
        this.name = name;
        this.color = color;
        this.location = location;
        this.type = type;
    }
    /**
     * Generate the color string rgb representation
     * example :
     *  #fff => rgb(255, 255, 255)
     *  rgba(1, 34, 12, .1) => rgb(1, 34, 12)
     *
     * @returns {string}
     * @public
     * @memberOf Color
     */
    toRgbString() {
        return this.color.toRgbString();
    }
    update(color) {
        this.color = color;
    }
    dispose() {
        this.color.dispose();
        delete this.color;
        delete this.location;
    }
    getColor() {
        return variables_manager_1.default.findVariable(this);
    }
    hasChanged() {
        let color = variables_manager_1.default.findVariable(this);
        return (color && this.color !== color);
    }
}
exports.default = Variable;
//# sourceMappingURL=variable_new.js.map