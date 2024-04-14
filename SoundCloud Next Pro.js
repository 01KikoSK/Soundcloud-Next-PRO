// ==UserScript==
// @name         SoundCloud Next Pro
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Add a "Pro" badge to SoundCloud tracks
// @author       01KikoSK
// @match        https://soundcloud.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Check if the user is logged in and has a Pro account
    if (!isLoggedIn() || !isProUser()) {
        return;
    }

    // Find all track elements on the page
    const trackElements = document.querySelectorAll('.soundList__item');

    // Add a "Pro" badge to each track
    trackElements.forEach((trackElement) => {
        const proBadge = document.createElement('span');
        proBadge.classList.add('pro-badge');
        proBadge.textContent = 'Pro';
        trackElement.appendChild(proBadge);
    });

    // Helper function to check if the user is logged in
    function isLoggedIn() {
        return document.querySelector('.userNav__username') !== null;
    }

    // Helper function to check if the user has a Pro account
    function isProUser() {
        return document.querySelector('.userNav__username').textContent.includes('Pro');
    }
})();