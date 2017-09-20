describe("Pay Calculator", function() {
    
    it("should calculate payment based on hours worked", function(){
        expect(CalculatePayment('5:00', '8:00', '8:00')).toBe(36);
    });

    it("should automatically differentate pay rate for after bedtime", function(){
        expect(CalculatePayment('5:00', '8:00', '10:00')).toBe(52);
    })
  });
