define([
    'dojo/_base/declare'

], function(
    declare
) {
    // summary:
    //      {%= description %}
    return declare('{%= declareName %}', null, {
        constructor: function() {
            console.log(this.declaredClass + '::constructor', arguments);
        }
    });
});