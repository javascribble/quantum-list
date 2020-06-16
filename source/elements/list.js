import { Quantum, define } from '../../references/quantum.js';
import { list } from '../templates/list.js';

export class List extends Quantum {
    constructor() {
        super(list);
    }
}

define(List);