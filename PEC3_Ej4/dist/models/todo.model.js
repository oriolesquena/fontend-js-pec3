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
        return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c => (Number(c) ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))).toString(16));
    }
}
