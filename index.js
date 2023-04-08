// ==UserScript==
// @name         roboto for docs.rs
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  changes font in docs.rs from like "TIMES NEW ROMAN" to the normal!
// @author       wennerryle
// @match        https://docs.rs/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=docs.rs
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector('head').innerHTML += `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
`;

    function getQuerySelectorsByArray(...queries) {
        return queries.map(e => Array.from(document.querySelectorAll(e)));
    }

    // Add styles for the roboto
    getQuerySelectorsByArray('h1', 'h2', 'h3', 'h4', 'p', 'li', 'div').forEach(elements => {
        elements.forEach(element => {
            element.style.fontFamily = 'Roboto, sans-serif';
        });
    });
})();
