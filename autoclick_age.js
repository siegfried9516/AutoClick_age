// ==UserScript==
// @name         動畫瘋自動點擊年齡確認
// @namespace    https://github.com/siegfried9516/autoclick_age
// @version      0.3
// @description  自動點擊巴哈姆特動畫瘋的年齡確定按鈕
// @author       siegfried9516
// @match        https://ani.gamer.com.tw/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var confirmButtonSelector = "#adult";

    var checkExist = setInterval(function() {
        var confirmButton = document.querySelector(confirmButtonSelector);
        if (confirmButton){ confirmButton.click(); }
    }, 500); // 每500毫秒檢查一次按鈕是否存在
})();
