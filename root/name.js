define([
    'dojo/_base/declare'
],

function (
    declare
    ) {
    "use strict";
    return declare('{%= declareName %}', null, {
        constructor: function () {
            console.log(this.declaredClass + "::constructor", arguments);
        }
    });
});