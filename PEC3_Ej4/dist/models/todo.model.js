"use strict";
/**
 * @class Model
 *
 * Manages the data of the application.
 */
class Todo {
    constructor({ text, complete } = { text: '', complete: false }) {
        this.id = this.uuidv4();
        this.text = text;
        this.complete = complete;
    }
    uuidv4() {
        return (1e7 + -1e3 + -4e3 + -8e3 + -1e11)
            .toString()
            .replace(/[018]/g, c => (Number(c) ^
            (crypto.getRandomValues(new Uint8Array(1))[0] &
                (15 >> (Number(c) / 4)))).toString(16));
    }
}
