"use strict";
const WDB = {
    banjo: "(q.) (+n.) the count of, the number of",
    meda: "(n.) [>] thing, something",
    a: "(sm.) (positive statement)",
    i: "(sm.) (adds context markers, aw., subjects and/or objects to the following sentence)",
    ti: "(n.) [0] me",
    miku: "(rw.) receive (information, knowledge)",
    kipo: "(n.) [0] image, view, scenery",
    asen: "(v.) (+n.) go within (something), enter (something)",
    frio: "(n.) [+] building",
    imo: "(gn.) (+n.) the group containing (all of)",
    semo: "(n.) (+gn.) all of the group's elements",
    amun: "(n.) [0] you and me",
    dide: "(ad.) powerful",
    nu: "(n.) [0] you"
};
class WordRef extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.title = WDB[this.textContent];
    }
}
;
customElements.define("w-ref", WordRef);
