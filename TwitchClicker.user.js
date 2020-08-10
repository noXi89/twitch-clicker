// ==UserScript==
// @name         Twitch clicker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.twitch.tv/*
// @match        https://*.ext-twitch.tv/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    setInterval(() => {
        const x = window.document.querySelectorAll('.claimable-bonus__icon')
        x && x.length > 0 && x[0] && x[0].click()
        const y = window.document.querySelectorAll("div[class*='style__praiseButtonGloss']")
        let p = window.document.querySelectorAll("div[class*='style__praiseProgressBar']")
        p = p && p[0] && p[0].style && p[0].style.height
        p = /(.*)\%$/.exec(p)
        p = +(p && p[1])
        if (p>=1) {
            console.log('click '+p+' times')
            for(let i=0; i<=p; i++) {
                (y && y.length > 0 && y[0] && y[0].click())
            }
        }
    }, 3000)
})();