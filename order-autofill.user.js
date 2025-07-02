// ==UserScript==
// @name         Order AutoFill (Reshma Bunny Server)
// @namespace    TSMDC
// @version      1.0
// @author       JAI SREE RAM
// @description  Autofills dropdowns and selects specific address
// @match        https://onlinebooking.sand.telangana.gov.in/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // First dropdown autofill
    $('.Dropdown').val('16').change();
    
    // Second dropdown autofill
    setTimeout(function(){
        $('#ccMain_ddlsandpurpose').val('2').change();
    }, 0);

    // Search for location and select radio
    var s = "Palugula";
    var intId = setInterval(function() {
        try {
            if (document.querySelector('.modal').style.display != 'block') {
                for (var i = 0; i < 100; i++) {
                    var data = document.getElementsByClassName("GridviewScrollItem")[i].cells[2].innerHTML;
                    if (data.indexOf(s) !== -1) {
                        document.querySelectorAll("input[type='radio']")[i].click();
                        clearInterval(intId);
                        break;
                    }
                }
            }
        } catch (e) {
            PopulateGrid(0);
        }
    }, 1100);
})();
