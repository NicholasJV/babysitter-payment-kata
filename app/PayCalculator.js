function CalculatePayment(startTime, endTime) {
    var rate = 12;
    var totalTime = startTime - endTime;
    return totalTime * rate;
}