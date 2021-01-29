import html from '../templates/list.js';

export class List extends Quantum {
    constructor() {
        super();
    }
}

List.define('quantum-list', html);