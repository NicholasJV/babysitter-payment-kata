describe("Pay Calculator", function() {
    it("should calculate payment based on hours worked", function() {
        expect(CalculatePayment('5:00', '8:00')).toBe(36);
    });
  });
