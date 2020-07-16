import { Component, template } from '../../references/quantum.js';
import html from '../templates/list.js';

export class Item extends Component {
    constructor() {
        super();
    }

    static template = template(html);

    static attributes = [];
}

customElements.define('quantum-list', Item);