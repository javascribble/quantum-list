import html from '../templates/list.js';

export class Item extends quantum.Component {
    constructor() {
        super();
    }

    static template = quantum.template(html);
}

quantum.define('quantum-list', Item);