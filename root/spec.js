require([
    '{%= path %}/{%= name %}'

], function(
    {%= name %}
) {
    describe('{%= path %}/{%= name %}', function() {
        var testObject;
        beforeEach(function() {
            testObject = new {%= name %}();
        });
        afterEach(function() {
            testObject = null;
        });
        it('create a valid object', function() {
            expect(testObject).toEqual(jasmine.any({%= name %}));
        });
    });
});