import { Component } from '../../references/quantum.js';

export class Item extends Component {
    constructor() {
        super();
    }

    static template = document.querySelector('#quantum-list');

    static attributes = [];
}

customElements.define('quantum-list', Item);