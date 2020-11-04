import { Component, template, define } from '../import.js';
import html from '../templates/list.js';

export class List extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-list', Item);