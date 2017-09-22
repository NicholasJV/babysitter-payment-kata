describe("Pay Calculator", function() {
    
    it("should calculate payment based on hours worked", function(){
        expect(CalculatePayment('5:00', '8:00', '8:00')).toBe(36);
    });

    it("should automatically differentate pay rate for after bedtime", function(){
        expect(CalculatePayment('5:00', '8:00', '10:00')).toBe(52);
    })

    it("should automatically differentate pay rate for after bedtime", function(){
        expect(CalculatePayment('5:00', '8:00', '2:00')).toBe(100);
    })

    it("should automatically differentiate pay rate for after midnight", function(){
        expect(CalculatePayment('12:00', '12:00', '2:00')).toBe(32);
    })
    
    it("should automatically differentiate mixed pay rates", function(){
        expect(CalculatePayment('5:00', '10:00', '2:00')).toBe(108);
    })

    xit("should round up on higher pay rate hours", function(){
        expect(Rounder());
    })

    it("should create a time object with all times stored within", function(){
        expect(timeFormatter('5:00', '10:00', '2:00')).toEqual({
            startTimeHour: 0,
            startTimeMinutes: 0,
            bedTimeHour: 5,
            bedTimeMinutes: 0,
            endTimeHour: 9,
            endTimeMinutes: 0
        })
    })

});
