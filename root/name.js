define([
    'dojo/_base/declare'

], function(
    declare
) {
    // summary:
    //      {%= description %}
    return declare(null, {
        constructor: function() {
            console.log(this.declaredClass + '::constructor', arguments);
        }
    });
});