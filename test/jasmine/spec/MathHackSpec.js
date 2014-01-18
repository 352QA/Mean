describe("Test Math Hack", function() {
    var MathHackService;

    beforeEach(function() {
        MathHackService = new MathHack();
    });

    afterEach(function() {
        MathHackService = null;
    });

    it("convert values for positive number input", function(){
        var distance = MathHackService.convertFromKilometers(2, "Meter");
        expect(distance).toBe(2000);

    });

    it("add numbers", function() {
        var addednumber = MathHackService.addTwoNumbers(2,3);
        expect(addednumber).toBe(5);
    });

});
