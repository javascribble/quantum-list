import html from '../templates/list.js';

const { Component, template, define } = quantum;

export class List extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-list', Item);