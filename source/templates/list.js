export default `
<style>
    ol, ul {
        padding-left: 0;
        list-style: none;
    }
    
        ol li, ul li {
            padding: var(--space-small);
        }

    slot {
        display: inline-block;
    }

    ::slotted(*) {
        padding: var(--quantum-list-item-padding);
    }
</style>
<ul>
    <slot></slot>
</ul>
`;