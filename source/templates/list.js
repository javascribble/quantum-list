export default `
<style>
    ul {
        padding-left: 0;
        list-style: none;
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